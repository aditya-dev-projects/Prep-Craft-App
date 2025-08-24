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
import type { Chapter, Lecture, Problem, Link, Profile, UserRole, UserProgress } from './types';

// Helper function to convert Firestore timestamp to string
const timestampToString = (timestamp: any): string => {
  if (timestamp instanceof Timestamp) {
    return timestamp.toDate().toISOString();
  }
  return timestamp || new Date().toISOString();
};

// Helper function to convert data with timestamps
const convertTimestamps = <T>(data: any): T => {
  const converted = { ...data };
  if (converted.created_at) {
    converted.created_at = timestampToString(converted.created_at);
  }
  if (converted.updated_at) {
    converted.updated_at = timestampToString(converted.updated_at);
  }
  if (converted.completed_at) {
    converted.completed_at = timestampToString(converted.completed_at);
  }
  return converted;
};

// Chapter services
export const chapterService = {
  async getAll(): Promise<Chapter[]> {
    const querySnapshot = await getDocs(collection(db, 'chapters'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...convertTimestamps(doc.data())
    })) as Chapter[];
  },

  async getById(id: string): Promise<Chapter | null> {
    const docRef = doc(db, 'chapters', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...convertTimestamps(docSnap.data()) } as Chapter;
    }
    return null;
  },

  async create(data: Omit<Chapter, 'id' | 'created_at' | 'updated_at'>): Promise<Chapter> {
    const docRef = await addDoc(collection(db, 'chapters'), {
      ...data,
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    });
    return { id: docRef.id, ...data } as Chapter;
  },

  async update(id: string, data: Partial<Chapter>): Promise<void> {
    const docRef = doc(db, 'chapters', id);
    await updateDoc(docRef, {
      ...data,
      updated_at: serverTimestamp(),
    });
  },

  async delete(id: string): Promise<void> {
    const docRef = doc(db, 'chapters', id);
    await deleteDoc(docRef);
  }
};

// Lecture services
export const lectureService = {
  async getByChapterId(chapterId: string): Promise<Lecture[]> {
    const q = query(
      collection(db, 'lectures'),
      where('chapter_id', '==', chapterId),
      orderBy('order_index')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...convertTimestamps(doc.data())
    })) as Lecture[];
  },

  async create(data: Omit<Lecture, 'id' | 'created_at' | 'updated_at'>): Promise<Lecture> {
    const docRef = await addDoc(collection(db, 'lectures'), {
      ...data,
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    });
    return { id: docRef.id, ...data } as Lecture;
  },

  async update(id: string, data: Partial<Lecture>): Promise<void> {
    const docRef = doc(db, 'lectures', id);
    await updateDoc(docRef, {
      ...data,
      updated_at: serverTimestamp(),
    });
  }
};

// Problem services
export const problemService = {
  async getByLectureId(lectureId: string): Promise<Problem[]> {
    const q = query(
      collection(db, 'problems'),
      where('lecture_id', '==', lectureId),
      orderBy('order_index')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...convertTimestamps(doc.data())
    })) as Problem[];
  },

  async create(data: Omit<Problem, 'id' | 'created_at' | 'updated_at'>): Promise<Problem> {
    const docRef = await addDoc(collection(db, 'problems'), {
      ...data,
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    });
    return { id: docRef.id, ...data } as Problem;
  }
};

// Link services
export const linkService = {
  async getByLectureId(lectureId: string): Promise<Link[]> {
    const q = query(
      collection(db, 'links'),
      where('lecture_id', '==', lectureId),
      orderBy('order_index')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...convertTimestamps(doc.data())
    })) as Link[];
  },

  async create(data: Omit<Link, 'id' | 'created_at' | 'updated_at'>): Promise<Link> {
    const docRef = await addDoc(collection(db, 'links'), {
      ...data,
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    });
    return { id: docRef.id, ...data } as Link;
  }
};

// User role services
export const userRoleService = {
  async getByUserId(userId: string): Promise<UserRole | null> {
    const q = query(
      collection(db, 'user_roles'),
      where('user_id', '==', userId)
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return { id: doc.id, ...convertTimestamps(doc.data()) } as UserRole;
    }
    return null;
  },

  async getAll(): Promise<UserRole[]> {
    const querySnapshot = await getDocs(collection(db, 'user_roles'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...convertTimestamps(doc.data())
    })) as UserRole[];
  },

  async create(data: Omit<UserRole, 'id' | 'created_at'>): Promise<UserRole> {
    const docRef = await addDoc(collection(db, 'user_roles'), {
      ...data,
      created_at: serverTimestamp(),
    });
    return { id: docRef.id, ...data } as UserRole;
  },

  async update(userId: string, role: 'admin' | 'user'): Promise<void> {
    const q = query(
      collection(db, 'user_roles'),
      where('user_id', '==', userId)
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const docRef = doc(db, 'user_roles', querySnapshot.docs[0].id);
      await updateDoc(docRef, { role });
    } else {
      // Create new role if doesn't exist
      await this.create({ user_id: userId, role });
    }
  }
};

// Profile services
export const profileService = {
  async getByUserId(userId: string): Promise<Profile | null> {
    const docRef = doc(db, 'profiles', userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...convertTimestamps(docSnap.data()) } as Profile;
    }
    return null;
  },

  async create(data: Omit<Profile, 'id' | 'created_at' | 'updated_at'>): Promise<Profile> {
    const docRef = doc(db, 'profiles', data.id);
    await updateDoc(docRef, {
      ...data,
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    });
    return data as Profile;
  },

  async update(userId: string, data: Partial<Profile>): Promise<void> {
    const docRef = doc(db, 'profiles', userId);
    await updateDoc(docRef, {
      ...data,
      updated_at: serverTimestamp(),
    });
  }
};

// User progress services
export const userProgressService = {
  async getByUserId(userId: string): Promise<UserProgress[]> {
    const q = query(
      collection(db, 'user_progress'),
      where('user_id', '==', userId)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...convertTimestamps(doc.data())
    })) as UserProgress[];
  },

  async create(data: Omit<UserProgress, 'id' | 'created_at' | 'updated_at'>): Promise<UserProgress> {
    const docRef = await addDoc(collection(db, 'user_progress'), {
      ...data,
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    });
    return { id: docRef.id, ...data } as UserProgress;
  },

  async update(id: string, data: Partial<UserProgress>): Promise<void> {
    const docRef = doc(db, 'user_progress', id);
    await updateDoc(docRef, {
      ...data,
      updated_at: serverTimestamp(),
    });
  },
  
  async delete(id: string): Promise<void> {
    const docRef = doc(db, 'user_progress', id);
    await deleteDoc(docRef);
  },
  
  async deleteAllForUser(userId: string): Promise<void> {
    const userProgress = await this.getByUserId(userId);
    const deletePromises = userProgress.map(progress => {
      if (progress.id) {
        return this.delete(progress.id);
      }
      return Promise.resolve();
    });
    await Promise.all(deletePromises);
  }
};