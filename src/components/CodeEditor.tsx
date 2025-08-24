import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';
import Editor from '@monaco-editor/react';
import { cn } from '@/lib/utils';
import { ResizablePanel, ResizablePanelGroup, ResizableHandle } from '@/components/ui/resizable';

interface CodeEditorProps {
  code: string;
  language: string;
  onChange: (value: string) => void;
  onRun: () => void;
  status: 'idle' | 'running' | 'success' | 'error';
  input: string;
  setInput: (input: string) => void;
}

export const CodeEditor = ({
  code,
  language,
  onChange,
  onRun,
  status,
  input,
  setInput
}: CodeEditorProps) => {
  const [copied, setCopied] = useState(false);
  const [isInputVisible, setIsInputVisible] = useState(true);

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
  };

  return (
    <div className="flex flex-col h-full bg-card">
      <div className="flex items-center justify-between p-2 border-b border-border bg-muted/50">
        <div className="text-xs sm:text-sm font-medium">
          {language === 'javascript' ? 'JavaScript' :
           language === 'python' ? 'Python' :
           language === 'java' ? 'Java' :
           language === 'cpp' ? 'C++' : 'Code'}
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-7 w-7 sm:h-8 sm:w-8 p-0"
            onClick={copyToClipboard}
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
          <Button
            variant={status === 'error' ? 'destructive' : status === 'success' ? 'success' : 'default'}
            size="sm"
            className="h-7 sm:h-8 px-2 sm:px-3 gap-1"
            onClick={onRun}
            disabled={status === 'running'}
          >
            <Play className={cn("h-3 w-3", status === 'running' && "animate-spin")} />
            <span className="text-xs sm:text-sm">{status === 'running' ? 'Running...' : 'Run'}</span>
          </Button>
        </div>
      </div>
      <ResizablePanelGroup direction="vertical" className="flex-1">
        <ResizablePanel defaultSize={70}>
          <Editor
            height="100%"
            defaultLanguage={language}
            language={language}
            value={code}
            onChange={(value) => onChange(value || '')}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              fontSize: 13,
              tabSize: 2,
              automaticLayout: true,
              wordWrap: 'on',
              lineNumbers: 'on',
              glyphMargin: false,
              folding: true,
              lineDecorationsWidth: 5,
              lineNumbersMinChars: 3,
            }}
            loading={<div className="p-4 text-sm text-muted-foreground">Loading editor...</div>}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={30} minSize={10}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-2 border-b border-t border-border bg-muted/50">
              <h3 className="text-xs sm:text-sm font-medium">Input</h3>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 w-7 sm:h-8 sm:w-8 p-0"
                onClick={() => setIsInputVisible(!isInputVisible)}
              >
                {isInputVisible ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
              </Button>
            </div>
            {isInputVisible && (
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your input here..."
                className="flex-1 p-2 bg-background text-foreground resize-none focus:outline-none text-sm"
              />
            )}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
