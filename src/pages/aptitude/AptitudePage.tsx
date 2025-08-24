
import React, { useState } from 'react';
import AptitudeSidebar from '../../components/AptitudeSidebar';
import NumberSystem from './aptitude-chapters/NumberSystem';

// In a real app, you would have a map of components like this
const chapterComponents: { [key: string]: React.FC } = {
  'number-system': NumberSystem,
  // 'another-chapter': AnotherChapterComponent,
};

const AptitudePage: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState('number-system');

  const ChapterComponent = chapterComponents[selectedChapter];

  return (
    <div className="flex h-screen bg-gray-900">
      <AptitudeSidebar onSelectChapter={setSelectedChapter} />
      <main className="flex-1 overflow-y-auto">
        {ChapterComponent ? <ChapterComponent /> : <p>Select a chapter to view its content.</p>}
      </main>
    </div>
  );
};

export default AptitudePage;
