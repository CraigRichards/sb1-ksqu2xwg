import React, { useState } from 'react';
import { AgentLanguage } from '../../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface LanguageListProps {
  languages: AgentLanguage[];
}

const LanguageList: React.FC<LanguageListProps> = ({ languages }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayLanguages = isExpanded ? languages : languages.slice(0, 2);
  const remainingCount = languages.length - 2;

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {displayLanguages.map((lang, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100/80 text-indigo-800 backdrop-blur-sm"
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </span>
        ))}
      </div>
      
      {!isExpanded && languages.length > 2 && (
        <button
          onClick={() => setIsExpanded(true)}
          className="flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-700"
        >
          <ChevronDown className="w-3 h-3" />
          <span>+{remainingCount} more languages</span>
        </button>
      )}
      
      {isExpanded && (
        <button
          onClick={() => setIsExpanded(false)}
          className="flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-700"
        >
          <ChevronUp className="w-3 h-3" />
          <span>Show less</span>
        </button>
      )}
    </div>
  );
};

export default LanguageList;