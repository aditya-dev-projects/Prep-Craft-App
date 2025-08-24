import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Step } from "@/data/dsaCourse";
import { LectureCard } from "./LectureCard";

interface StepCardProps {
  step: Step;
  onToggleProblem: (stepId: string, lectureId: string, problemId: string) => void;
}

export const StepCard = ({ step, onToggleProblem }: StepCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const percentage = step.totalProblems > 0 ? Math.round((step.completedProblems / step.totalProblems) * 100) : 0;

  return (
    <div className="relative">
      <Card className={`bg-background border shadow-sm transition-all duration-300 ${isExpanded ? 'scale-[1.02]' : 'hover:scale-[1.01]'}`}>
        <div
          className="p-4 sm:p-6 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}>
              <ChevronRight className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
            </div>
          </div>
          <div className="text-right w-full sm:min-w-[140px] bg-secondary/50 p-3 rounded-lg border border-border mt-4 sm:mt-0">
            <div className="text-base sm:text-lg font-bold text-foreground">
              {step.completedProblems} / {step.totalProblems}
            </div>
            <Progress
              value={percentage}
              className="w-full sm:w-28 h-2 sm:h-3 mt-2"
            />
            <div className="text-xs text-muted-foreground mt-1">{percentage}% done</div>
          </div>
        </div>

        {isExpanded && (
          <div className="border-t bg-secondary/30">
            <div className="p-4 sm:p-6">
              <div className="space-y-4 sm:space-y-6">
                {step.lectures.map((lecture) => (
                  <LectureCard
                    key={lecture.id}
                    lecture={lecture}
                    stepId={step.id}
                    onToggleProblem={onToggleProblem}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};