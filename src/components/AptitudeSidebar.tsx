
import React from 'react';

interface AptitudeSidebarProps {
  onSelectChapter: (chapter: string) => void;
}

const chapters = [
  { id: 'number-system', title: 'Number System' },
  // Add other chapters here
];

const AptitudeSidebar: React.FC<AptitudeSidebarProps> = ({ onSelectChapter }) => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400">Aptitude Topics</h2>
      <nav>
        <ul>
          {chapters.map((chapter) => (
            <li key={chapter.id} className="mb-2">
              <button 
                onClick={() => onSelectChapter(chapter.id)} 
                className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-cyan-600 transition-colors duration-200"
              >
                {chapter.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AptitudeSidebar;
