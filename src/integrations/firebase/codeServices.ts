import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy,
  serverTimestamp,
  Timestamp 
} from 'firebase/firestore';
import { db } from './config';
import type { UserCode, TestCase, CodeExecutionResult } from './codeTypes';

// Helper function to convert Firestore timestamp to string
const timestampToString = (timestamp: any): string => {
  if (timestamp instanceof Timestamp) {
    return timestamp.toDate().toISOString();
  }
  return timestamp || new Date().toISOString();
}

// Helper function to convert data with timestamps
const convertTimestamps = <T>(data: any): T => {
  const converted = { ...data }
  if (converted.created_at) {
    converted.created_at = timestampToString(converted.created_at);
  }
  if (converted.updated_at) {
    converted.updated_at = timestampToString(converted.updated_at);
  }
  return converted;
};

// User code services
export const userCodeService = {
  async getByUserAndProblem(userId: string, problemId: string): Promise<UserCode | null> {
    const q = query(
      collection(db, 'user_code'),
      where('user_id', '==', userId),
      where('problem_id', '==', problemId)
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return { id: doc.id, ...convertTimestamps(doc.data()) } as UserCode;
    }
    return null;
  },

  async saveCode(data: {
    userId: string;
    problemId: string;
    code: string;
    language: string;
    timestamp: Date;
  }): Promise<UserCode> {
    // Convert to the format expected by Firestore
    const firestoreData = {
      user_id: data.userId,
      problem_id: data.problemId,
      code: data.code,
      language: data.language,
      timestamp: data.timestamp
    };
    
    // Check if code already exists for this user and problem
    const existingCode = await this.getByUserAndProblem(data.userId, data.problemId);
    
    if (existingCode?.id) {
      // Update existing code
      const docRef = doc(db, 'user_code', existingCode.id);
      await updateDoc(docRef, {
        ...firestoreData,
        updated_at: serverTimestamp(),
      });
      // For immediate client-side consistency, include a client-generated timestamp
      // as serverTimestamp() is set asynchronously on the server.
      return { ...existingCode, ...firestoreData, updated_at: new Date().toISOString() };
     } else {
      // Create new code entry
      const docRef = await addDoc(collection(db, 'user_code'), {
        ...firestoreData,
        created_at: serverTimestamp(),
        updated_at: serverTimestamp(),
      });
      return { id: docRef.id, ...firestoreData } as UserCode;
    }
  }
};

// Test case services
export const testCaseService = {
  async getByProblemId(problemId: string): Promise<TestCase[]> {
    // Forcing re-parse
    try {
      const q = query(
        collection(db, 'test_cases'),
        where('problem_id', '==', problemId),
        orderBy('order_index')
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...convertTimestamps(doc.data())
      })) as TestCase[];
    } catch (error) {
      console.error('Error fetching test cases:', error);
      
      // Check if this is an index error
      if (error instanceof Error && error.message.includes('requires an index')) {
        console.warn('Firestore index error. Please create the required index using the link in the error message.');
        console.warn('Returning test cases without ordering as a fallback.');
        
        // Fallback: query without orderBy
        try {
          const fallbackQuery = query(
            collection(db, 'test_cases'),
            where('problem_id', '==', problemId)
          );
          
          const fallbackSnapshot = await getDocs(fallbackQuery);
          // Sort manually in memory
          const testCases = fallbackSnapshot.docs.map(doc => ({
            id: doc.id,
            ...convertTimestamps(doc.data())
          })) as TestCase[];
          
          return testCases.sort((a, b) => (a.order_index || 0) - (b.order_index || 0));
        } catch (fallbackError) {
          console.error('Fallback query also failed:', fallbackError);
          return [];
        }
      }
      
      return [];
    }
  },

  async create(data: Omit<TestCase, 'id' | 'created_at' | 'updated_at'>): Promise<TestCase> {
    const docRef = await addDoc(collection(db, 'test_cases'), {
      ...data,
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    });
    return { id: docRef.id, ...data } as TestCase;
  },

  async update(id: string, data: Partial<TestCase>): Promise<void> {
    const docRef = doc(db, 'test_cases', id);
    await updateDoc(docRef, {
      ...data,
      updated_at: serverTimestamp(),
    });
  },

  async delete(id: string): Promise<void> {
    const docRef = doc(db, 'test_cases', id);
    await deleteDoc(docRef);
  }
};

// Real code execution service using Judge0 API
class CodeExecutionService {
  private getLanguageId(language: string): number | null {
    const languageMap: { [key: string]: number } = {
      javascript: 93,
      python: 71,
      java: 62,
      cpp: 54,
    };
    return languageMap[language] || null;
  }

  // Simplified to execute a single piece of code and return its direct output or error.
  async executeCode(params: {
    code: string;
    language: string;
  }): Promise<{
    success: boolean;
    output: string;
    executionTime: number;
    memoryUsed: number;
  }> {
    const { code, language } = params;
    const languageId = this.getLanguageId(language);

    // DEBUG: Log the API key to verify it's being loaded.
    console.log("Using Judge0 API Key:", import.meta.env.VITE_JUDGE0_API_KEY);

    if (!languageId) {
      return { success: false, output: 'Unsupported language', executionTime: 0, memoryUsed: 0 };
    }

    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': import.meta.env.VITE_JUDGE0_API_KEY,
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        },
        body: JSON.stringify({
          source_code: code,
          language_id: languageId,
        }),
      };

      // Use the single submission endpoint, not the batch one
      const response = await fetch('https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true', options);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Judge0 API error:', response.status, errorText);
        return {
          success: false,
          output: `API Error: ${response.status}. Please check the console for details.`,
          executionTime: 0,
          memoryUsed: 0,
        };
      }

      const result = await response.json();
      const statusId = result.status?.id;

      if (statusId === 3) { // Status: Accepted
        return {
          success: true,
          output: result.stdout || 'Execution successful, but no output was produced.',
          executionTime: result.time ? parseFloat(result.time) * 1000 : 0,
          memoryUsed: result.memory ? result.memory / 1024 : 0, // KB to MB
        };
      } else { // Any other status is an error (Compilation, Runtime, etc.)
        const errorMessage = result.compile_output || result.stderr || result.status?.description || 'An unknown error occurred.';
        return {
          success: false,
          output: errorMessage,
          executionTime: result.time ? parseFloat(result.time) * 1000 : 0,
          memoryUsed: result.memory ? result.memory / 1024 : 0,
        };
      }
    } catch (error) {
      console.error('Error calling Judge0 API:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown network error occurred.';
      return {
        success: false,
        output: `Failed to execute code: ${errorMessage}`,
        executionTime: 0,
        memoryUsed: 0,
      };
    }
  }
}

export const codeExecutionService = new CodeExecutionService();