import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AptitudeTopic, Example } from "@/data/aptitudeCourse";
import { Lightbulb, ListChecks, CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface AptitudeTopicCardProps {
  topic: AptitudeTopic;
  onToggleStatus: () => void;
}

const DetailedNotes = ({ notes }: { notes: { [key: string]: string[] | { [key: string]: string[] } } }) => {
  return (
    <div className="space-y-2 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
      {Object.entries(notes).map(([key, value]) => (
        <div key={key}>
          <h5 className="font-semibold">{key}</h5>
          <div className="pl-4">
            {Array.isArray(value) ? (
              <ul className="list-disc list-inside space-y-1">
                {value.map((item, index) => (
                  <li key={index} className="text-sm">{item}</li>
                ))}
              </ul>
            ) : (
              <DetailedNotes notes={value} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export const AptitudeTopicCard = ({ topic, onToggleStatus }: AptitudeTopicCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isCompleted = topic.status === 'completed';

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-yellow-500" />
          {topic.name}
        </CardTitle>
        <Button 
          size="sm"
          variant={isCompleted ? "secondary" : "outline"}
          onClick={onToggleStatus}
        >
          <CheckCircle2 className={`w-4 h-4 mr-2 ${isCompleted ? 'text-green-500' : ''}`} />
          {isCompleted ? 'Completed' : 'Mark as Complete'}
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="list-disc list-inside space-y-1">
          {topic.notes.map((note, index) => (
            <li key={index} className="text-muted-foreground">{note}</li>
          ))}
        </ul>
        
        <Button 
          size="sm"
          variant="outline"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full"
        >
          <ChevronDown className={`w-4 h-4 mr-2 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          {isExpanded ? 'Hide Detailed Notes' : 'Show Detailed Notes'}
        </Button>

        {isExpanded && (
          <div className="pt-4">
            <DetailedNotes notes={topic.detailedNotes} />
          </div>
        )}

        <div className="pt-4">
          <h4 className="font-semibold flex items-center gap-2 mb-2">
            <ListChecks className="w-5 h-5 text-blue-500" />
            Examples
          </h4>
          <div className="space-y-4">
            {topic.examples.map((example, index) => (
              <div key={index} className="p-4 border rounded-md">
                <p className="font-semibold">{example.problem}</p>
                <p className="text-sm text-muted-foreground mt-2">{example.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};