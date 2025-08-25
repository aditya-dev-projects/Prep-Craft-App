import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react'; // <-- Added ChevronDown here

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSelectChapter = (chapterId: string) => {
    onSelectChapter(chapterId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden p-4 bg-muted border-b border-border">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md hover:bg-background/90 transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar - Conditional rendering for mobile */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-muted text-muted-foreground p-4 overflow-y-auto 
          md:relative md:translate-x-0 md:border-r md:w-64
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-between items-center mb-4 md:hidden">
          <h2 className="text-2xl font-bold text-primary">Topics</h2>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-md hover:bg-background/90">
            <X size={24} />
          </button>
        </div>
        <nav>
          {sidebarData.map((section) => (
            <div key={section.section} className="mb-4">
              {/* Section Toggle */}
              <button
                onClick={() => toggleSection(section.section)}
                className="w-full text-left px-3 py-2 rounded-md bg-background hover:bg-background/90 focus:outline-none transition-colors duration-200 font-semibold flex justify-between items-center"
              >
                {section.section}
                <ChevronDown className={`w-4 h-4 transition-transform ${openSections[section.section] ? 'rotate-180' : ''}`} />
              </button>

              {/* Chapters (expand/collapse) */}
              <ul
                className={`mt-2 ml-4 overflow-hidden transition-all duration-300 ease-in-out ${
                  openSections[section.section] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {section.chapters.map((chapter) => (
                  <li key={chapter.id} className="mb-1">
                    <button
                      onClick={() => handleSelectChapter(chapter.id)}
                      className="w-full text-left px-3 py-2 rounded-md hover:bg-accent focus:outline-none focus:bg-accent transition-colors duration-200"
                    >
                      {chapter.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
      
      {/* Overlay to close sidebar when clicking outside on mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default AptitudeSidebar;