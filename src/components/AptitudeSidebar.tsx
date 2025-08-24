import React, { useState } from 'react';

interface AptitudeSidebarProps {
  onSelectChapter: (chapter: string) => void;
}

const sidebarData = [
  {
    section: 'Quantitative Aptitude',
    chapters: [
      { id: 'number-system', title: 'Number System' },
      { id: 'lcm-hcf', title: 'LCM & HCF' },
      { id: 'percentages', title: 'Percentages' },
      { id: 'profit-loss', title: 'Profit & Loss' },
      { id: 'simple-compound-interest', title: 'Simple & Compound Interest' },
      { id: 'ratio-proportion', title: 'Ratio & Proportion' },
      { id: 'time-speed-distance', title: 'Time, Speed & Distance' },
      { id: 'time-work', title: 'Time & Work' },
      { id: 'averages-mixtures', title: 'Averages & Mixtures' },
      { id: 'permutations-combinations', title: 'Permutations & Combinations' },
      { id: 'probability', title: 'Probability' },
      { id: 'algebra', title: 'Algebra' },
      { id: 'geometry-mensuration', title: 'Geometry & Mensuration' },
    ],
  },
  {
    section: 'Logical Reasoning',
    chapters: [
      { id: 'series', title: 'Series' },
      { id: 'blood-relations', title: 'Blood Relations' },
      { id: 'directions', title: 'Directions' },
      { id: 'coding-decoding', title: 'Coding & Decoding' },
      { id: 'puzzles', title: 'Puzzles' },
      { id: 'data-sufficiency', title: 'Data Sufficiency' },
      { id: 'syllogisms', title: 'Syllogisms' },
      { id: 'seating-arrangements', title: 'Seating Arrangements' },
    ],
  },
  {
    section: 'Verbal Ability',
    chapters: [
      { id: 'reading-comprehension', title: 'Reading Comprehension' },
      { id: 'sentence-correction', title: 'Sentence Correction' },
      { id: 'para-jumbles', title: 'Para Jumbles' },
      { id: 'synonyms-antonyms', title: 'Synonyms & Antonyms' },
      { id: 'fill-blanks', title: 'Fill in the Blanks' },
      { id: 'error-spotting', title: 'Error Spotting' },
    ],
  },
];

const AptitudeSidebar: React.FC<AptitudeSidebarProps> = ({ onSelectChapter }) => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <aside className="w-64 bg-muted text-muted-foreground p-4 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4 text-primary">Topics</h2>
      <nav>
        {sidebarData.map((section) => (
          <div key={section.section} className="mb-4">
            {/* Section Toggle */}
            <button
              onClick={() => toggleSection(section.section)}
              className="w-full text-left px-3 py-2 rounded-md bg-background hover:bg-background/90 focus:outline-none transition-colors duration-200 font-semibold"
            >
              {section.section}
            </button>

            {/* Chapters (expand/collapse) */}
            {openSections[section.section] && (
              <ul className="mt-2 ml-4">
                {section.chapters.map((chapter) => (
                  <li key={chapter.id} className="mb-1">
                    <button
                      onClick={() => onSelectChapter(chapter.id)}
                      className="w-full text-left px-3 py-2 rounded-md hover:bg-accent focus:outline-none focus:bg-accent transition-colors duration-200"
                    >
                      {chapter.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default AptitudeSidebar;
