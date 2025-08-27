
import React, { useState } from 'react';
import AptitudeSidebar from '../../components/AptitudeSidebar';
import NumberSystem from './aptitude-chapters/Quant/NumberSystem';
import LCMAndHCF from './aptitude-chapters/Quant/LCMAndHCF';
import Percentages from './aptitude-chapters/Quant/Percentages';
import ProfitAndLoss from './aptitude-chapters/Quant/ProfitAndLoss';
import SimpleAndCompoundInterest from './aptitude-chapters/Quant/SimpleAndCompoundInterest';
import RatioAndProportion from './aptitude-chapters/Quant/RatioAndProportion';
import PipesAndCisterns from './aptitude-chapters/Quant/PipesAndCisterns';
import TimeAndWork from './aptitude-chapters/Quant/TimeAndWork';
import Average from './aptitude-chapters/Quant/Average';
import PermutationsAndCombinations from './aptitude-chapters/Quant/PermutationsAndCombinations';
import Probability from './aptitude-chapters/Quant/Probability';
import AgeProblems from './aptitude-chapters/Quant/AgeProblems';
import Partnerships from './aptitude-chapters/Quant/Partnerships';
import AllegationsAndMixtures from './aptitude-chapters/Quant/AllegationsAndMixtures';
import ChainRule from './aptitude-chapters/Quant/ChainRule';
import TrainProblems from './aptitude-chapters/Quant/TrainProblems';
import BoatsAndStreams from './aptitude-chapters/Quant/BoatsAndStreams';
import DataInterpretation from './aptitude-chapters/Quant/DataInterpretation';






//Logical Reasoning
import SeatingArrangment from './aptitude-chapters/LogicalReasoningChapters/SeatingArrangment';
import NumberSeries from './aptitude-chapters/LogicalReasoningChapters/NumberSeries';
import ClockProblems from './aptitude-chapters/LogicalReasoningChapters/ClockProblems';
import Calendar from './aptitude-chapters/LogicalReasoningChapters/Calendar';
import BloodRelations from './aptitude-chapters/LogicalReasoningChapters/BloodRelations';
import Directions from './aptitude-chapters/LogicalReasoningChapters/Directions';
import WordPattern from './aptitude-chapters/LogicalReasoningChapters/WordPattern';
import CodingDecoding from './aptitude-chapters/LogicalReasoningChapters/CodingDecoding';
import MathsOps from './aptitude-chapters/LogicalReasoningChapters/MathsOps';
import VennDiagram from './aptitude-chapters/LogicalReasoningChapters/VennDiagram';
import VisualReasoning from './aptitude-chapters/LogicalReasoningChapters/VisualReasoning';
import PaperCuttingAndAdding from './aptitude-chapters/LogicalReasoningChapters/PaperCuttingAndAdding';
import CubesAndDices from './aptitude-chapters/LogicalReasoningChapters/CubesAndDices';
import DataSufficency from './aptitude-chapters/LogicalReasoningChapters/DataSufficency';










//VArc
import ReadingComp from './aptitude-chapters/VarcChapters/ReadingComp';

// In a real app, you would have a map of components like this
const chapterComponents: { [key: string]: React.FC } = {
  'number-system': NumberSystem,
  'lcm-hcf': LCMAndHCF,
  'percentages': Percentages,
  'profit-loss': ProfitAndLoss,
  'simple-compound-interest': SimpleAndCompoundInterest,
  'ratio-proportion': RatioAndProportion,
  'pipes-cisterns': PipesAndCisterns,
  'time-work': TimeAndWork,
  'age-problems': AgeProblems,
  'average': Average,
  'permutations-combinations': PermutationsAndCombinations,
  'probability': Probability,
  'partnerships': Partnerships,
  'allegations-mixtures': AllegationsAndMixtures,
  'chain-rule': ChainRule,
  'train-problems': TrainProblems,
  'boats-streams': BoatsAndStreams,
  'data-interpretation': DataInterpretation,

  
  




  //Logical Reasoning 
  'seating-arrangement': SeatingArrangment,
  'number-series': NumberSeries,
  'clock-problems': ClockProblems,
  'calendar': Calendar,
  'blood-relations': BloodRelations,
  'directions': Directions,
  'word-pattern': WordPattern,
  'coding-decoding': CodingDecoding,
  'maths-ops': MathsOps,
  'venn-diagram': VennDiagram,
  'visual-reasoning': VisualReasoning,
  'paper-cutting-adding': PaperCuttingAndAdding,
  'cubes-dices': CubesAndDices,
  'data-sufficency': DataSufficency,
  

  //Varc
  'ReadingComp': ReadingComp,

  // 'another-chapter': AnotherChapterComponent,
};

const AptitudePage: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState('number-system');

  const ChapterComponent = chapterComponents[selectedChapter];

  return (
    <div className="flex h-screen bg-background">
      <AptitudeSidebar onSelectChapter={setSelectedChapter} />
      <main className="flex-1 overflow-y-auto">
        {ChapterComponent ? <ChapterComponent /> : <p>Select a chapter to view its content.</p>}
      </main>
    </div>
  );
};

export default AptitudePage;
