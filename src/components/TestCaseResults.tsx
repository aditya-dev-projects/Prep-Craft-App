// filepath: src/components/TestCaseResults.tsx
import { CheckCircle, XCircle } from 'lucide-react';

interface TestCaseResultsProps {
  results: any[] | undefined;
}

export const TestCaseResults = ({ results }: TestCaseResultsProps) => {
  if (!results) {
    return <div className="p-4 text-muted-foreground">Run the code to see test case results.</div>;
  }

  return (
    <div className="p-2 sm:p-4 space-y-4">
      {results.map((result, index) => (
        <div key={index} className="border rounded-md p-3 bg-card">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-2">
            <h3 className={`font-semibold flex items-center gap-2 ${result.passed ? 'text-green-500' : 'text-red-500'}`}>
              {result.passed ? <CheckCircle size={18} /> : <XCircle size={18} />}
              Test Case #{index + 1}
            </h3>
            <span className="text-xs text-muted-foreground">
              Time: {result.executionTime ? `${(result.executionTime * 1000).toFixed(0)}ms` : 'N/A'} | 
              Memory: {result.memoryUsed ? `${result.memoryUsed.toFixed(2)}KB` : 'N/A'}
            </span>
          </div>
          <div className="space-y-1 text-sm">
            <div>
              <span className="font-medium">Input:</span>
              <pre className="bg-muted p-2 rounded-md mt-1 text-xs whitespace-pre-wrap break-all">{JSON.stringify(result.input)}</pre>
            </div>
            <div>
              <span className="font-medium">Expected:</span>
              <pre className="bg-muted p-2 rounded-md mt-1 text-xs whitespace-pre-wrap break-all">{JSON.stringify(result.expected)}</pre>
            </div>
            <div>
              <span className="font-medium">Your Output:</span>
              <pre className={`p-2 rounded-md mt-1 text-xs whitespace-pre-wrap break-all ${result.passed ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'}`}>
                {result.output}
              </pre>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};