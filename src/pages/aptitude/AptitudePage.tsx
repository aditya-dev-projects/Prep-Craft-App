
import React, { useState } from 'react';
import AptitudeSidebar from '../../components/AptitudeSidebar';
import NumberSystem from './aptitude-chapters/NumberSystem';
import LCMAndHCF from './aptitude-chapters/LCMAndHCF';
import Percentages from './aptitude-chapters/Percentages';
import ProfitAndLoss from './aptitude-chapters/ProfitAndLoss';
import SimpleAndCompoundInterest from './aptitude-chapters/SimpleAndCompoundInterest';
import RatioAndProportion from './aptitude-chapters/RatioAndProportion';
import PipesAndCisterns from './aptitude-chapters/PipesAndCisterns';
import TimeAndWork from './aptitude-chapters/TimeAndWork';
import Average from './aptitude-chapters/Average';
import PermutationsAndCombinations from './aptitude-chapters/PermutationsAndCombinations';
import Probability from './aptitude-chapters/Probability';
import AgeProblems from './aptitude-chapters/AgeProblems';
import Partnerships from './aptitude-chapters/Partnerships';
import AllegationsAndMixtures from './aptitude-chapters/AllegationsAndMixtures';
import ChainRule from './aptitude-chapters/ChainRule';
import TrainProblems from './aptitude-chapters/TrainProblems';
import BoatsAndStreams from './aptitude-chapters/BoatsAndStreams';
import DataInterpretation from './aptitude-chapters/DataInterpretation';






//Logical Reasoning
import Series from './aptitude-chapters/LogicalReasoningChapters/Series';

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
  'series': Series,

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
