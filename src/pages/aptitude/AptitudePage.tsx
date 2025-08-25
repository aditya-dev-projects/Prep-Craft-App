
import React, { useState } from 'react';
import AptitudeSidebar from '../../components/AptitudeSidebar';
import NumberSystem from './aptitude-chapters/NumberSystem';
import LCMAndHCF from './aptitude-chapters/LCMAndHCF';
import Percentages from './aptitude-chapters/Percentages';
import ProfitAndLoss from './aptitude-chapters/ProfitAndLoss';
import SimpleAndCompoundInterest from './aptitude-chapters/SimpleAndCompoundInterest';
import RatioAndProportion from './aptitude-chapters/RatioAndProportion';
import TimeSpeedAndDistance from './aptitude-chapters/TimeSpeedAndDistance';
import TimeAndWork from './aptitude-chapters/TimeAndWork';
import AveragesAndMixtures from './aptitude-chapters/AveragesAndMixtures';
import PermutationsAndCombinations from './aptitude-chapters/PermutationsAndCombinations';
import Probability from './aptitude-chapters/Probability';
import Algebra from './aptitude-chapters/Algebra';
import GeometryAndMensuration from './aptitude-chapters/GeometryAndMensuration';

// In a real app, you would have a map of components like this
const chapterComponents: { [key: string]: React.FC } = {
  'number-system': NumberSystem,
  'lcm-hcf': LCMAndHCF,
  'percentages': Percentages,
  'profit-loss': ProfitAndLoss,
  'simple-compound-interest': SimpleAndCompoundInterest,
  'ratio-proportion': RatioAndProportion,
  'time-speed-distance': TimeSpeedAndDistance,
  'time-work': TimeAndWork,
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
