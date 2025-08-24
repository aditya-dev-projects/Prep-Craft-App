import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useDSAProgress } from '@/hooks/useDSAProgress';
import { CodeEditor } from '@/components/CodeEditor';
import { ProblemDescription } from '@/components/ProblemDescription';
import { CodeOutput } from '@/components/CodeOutput';
import { auth } from '@/integrations/firebase/config';
// Removed test case related imports
import { userCodeService, codeExecutionService } from '@/integrations/firebase/codeServices';

const PracticePage = () => {
  const { problemId } = useParams<{ problemId: string }>();
  const navigate = useNavigate();
  const { course } = useDSAProgress();
  const [problem, setProblem] = useState<any>(null);
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [status, setStatus] = useState<'idle' | 'running' | 'success' | 'error'>('idle');

  // Find the problem details from the course data
  useEffect(() => {
    if (!problemId || !course) return;

    // Search for the problem in all steps and lectures
    for (const step of course) {
      for (const lecture of step.lectures) {
        const foundProblem = lecture.problems.find(p => p.id === problemId);
        if (foundProblem) {
          setProblem({
            ...foundProblem,
            stepId: step.id,
            lectureId: lecture.id
          });
          // Removed test case initialization logic
          break;
        }
      }
    }
  }, [problemId, course]);

  // Set initial code template based on selected language or load from Firebase
  useEffect(() => {
    if (!problem) return;

    const templates = {
      javascript: `/**
 * Problem: ${problem?.title || ''}
 * Difficulty: ${problem?.difficulty || ''}
 */

// Your solution
function solution(input) {
  // Your code here
  
  return 0;
}

// Example usage
const result = solution([1, 2, 3]);
console.log(result);
`,
      python: `# Problem: ${problem?.title || ''}
# Difficulty: ${problem?.difficulty || ''}

# Your solution
def solution(input):
    # Your code here
    
    return result

# Example usage
result = solution([1, 2, 3])
print(result)
`,
      java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Your code here
        Scanner sc = new Scanner(System.in);

    }
}
`,
      cpp: `/**
 * Problem: ${problem?.title || ''}
 * Difficulty: ${problem?.difficulty || ''}
 */

#include <iostream>
#include <vector>
using namespace std;

// Your solution
int solution(vector<int>& input) {
    // Your code here
    
    return 0;
}

int main() {
    // Example usage
    vector<int> input = {1, 2, 3};
    int result = solution(input);
    cout << result << endl;
    return 0;
}
`
    };

    // Set default template first
    setCode(templates[language] || templates.javascript);
    
    // Then try to load saved code from Firebase
    const loadSavedCode = async () => {
      if (!auth.currentUser || !problem) return;
      
      try {
        const savedCode = await userCodeService.getByUserAndProblem(
          auth.currentUser.uid,
          problem.id
        );
        
        if (savedCode && savedCode.language === language) {
          // If we have saved code for this language, use it
          setCode(savedCode.code);
        } else if (savedCode && savedCode.language !== language) {
          // If we have saved code but for a different language, keep the template
          // and we'll save the new language when they run the code
          console.log('Found saved code but for a different language');
        }
      } catch (error) {
        console.error('Error loading saved code:', error);
      }
    };
    
    loadSavedCode();
  }, [problem, language]);

  // Function to compile and run code
  const runCode = async () => {
    if (!problem || !auth.currentUser) return;

    setStatus('running');
    setOutput('Running your code...');

    try {
      // Save the current code to Firebase
      await userCodeService.saveCode({
        userId: auth.currentUser.uid,
        problemId: problem.id,
        code: code,
        language: language,
        timestamp: new Date()
      });

      // Execute the code and get the result
      const result = await codeExecutionService.executeCode({
        code: code,
        language: language,
        input: input,
      });

      // Set status and output based on the result from the service
      if (result.success) {
        setStatus('success');
        const successMessage = `Execution successful.\nExecution time: ${result.executionTime.toFixed(0)}ms\nMemory used: ${result.memoryUsed.toFixed(2)}MB\n\n--- Output ---\n${result.output}`;
        setOutput(successMessage);
      } else {
        setStatus('error');
        // The output field from the service now contains the actual error message
        setOutput(result.output);
      }

    } catch (error) {
      setStatus('error');
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setOutput(`An unexpected client-side error occurred: ${errorMessage}`);
    }
  };

  if (!problem) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Loading problem...</h2>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border p-2 sm:p-4 bg-card">
        <div className="container mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <h1 className="text-base sm:text-xl font-bold">{problem.title}</h1>
              <div className={`px-2 py-1 rounded text-xs font-medium ${ 
                problem.difficulty === 'Easy' ? 'bg-progress-easy text-progress-easy-foreground' :
                problem.difficulty === 'Medium' ? 'bg-progress-medium text-progress-medium-foreground' :
                'bg-progress-hard text-progress-hard-foreground'
              }`}>{problem.difficulty}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[120px] sm:w-[180px]">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="java">Java</SelectItem>
                <SelectItem value="cpp">C++</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              onClick={runCode} 
              disabled={status === 'running'} 
              className="gap-2"
              variant={status === 'error' ? 'destructive' : status === 'success' ? 'success' : 'default'}
            >
              <Play className={`h-4 w-4 ${status === 'running' ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">{status === 'running' ? 'Running...' : 'Run'}</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
        {/* Problem description */}
        <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-border overflow-y-auto">
          <ProblemDescription 
            title={problem.title}
            difficulty={problem.difficulty}
            description={problem.description}
            examples={problem.examples}
            constraints={problem.constraints}
          />
        </div>

        {/* Code editor and output */}
        <div className="flex-1 flex flex-col h-full">
          {/* Code editor */}
          <div className="flex-1 h-2/3">
            <CodeEditor
              code={code}
              language={language}
              onChange={setCode}
              onRun={runCode}
              status={status}
              input={input}
              setInput={setInput}
            />
          </div>
          
          {/* Output section */}
          <div className="h-1/3 border-t border-border">
            <CodeOutput output={output} status={status} />
          </div>
        </div>
      </div>
    </div>
  );
};


export default PracticePage;

