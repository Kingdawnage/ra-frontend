import { ResumeAnalysis } from '@/app/services/resume';

interface Suggestion {
  icon: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  section?: string;
}

interface ImprovementSuggestionsProps {
  analysis: ResumeAnalysis;
}

const getSectionIcon = (section: string): string => {
  const icons: Record<string, string> = {
    Education: '🎓',
    Experience: '💼',
    Skills: '🔧',
    Profile: '👤',
    Name: '📝'
  };
  return icons[section] || '📝';
};

const getSuggestionsFromAnalysis = (analysis: ResumeAnalysis): Suggestion[] => {
  const suggestions: Suggestion[] = [];
  
  // Add general feedback
  if (analysis.feedback.general) {
    suggestions.push({
      icon: '📝',
      title: 'Overall Structure',
      description: analysis.feedback.general,
      priority: 'high'
    });
  }

  // Add section-specific feedback
  Object.entries(analysis.feedback.sections).forEach(([section, feedback]) => {
    if (feedback) {
      suggestions.push({
        icon: getSectionIcon(section),
        title: `${section} Section`,
        description: feedback,
        priority: 'medium',
        section
      });
    }
  });

  // Add score-based suggestions
  const scores = analysis.scores.section_scores;
  Object.entries(scores).forEach(([section, score]) => {
    if (score < 0.7) {
      suggestions.push({
        icon: getSectionIcon(section),
        title: `Improve ${section} Section`,
        description: `Your ${section.toLowerCase()} section could use improvement. Consider adding more details or reorganizing the content.`,
        priority: 'high',
        section
      });
    }
  });

  return suggestions;
};

const ImprovementSuggestions = ({ analysis }: ImprovementSuggestionsProps) => {
  const suggestions = getSuggestionsFromAnalysis(analysis);

  return (
    <div className="w-full max-w-4xl p-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Improvement Suggestions</h2>
      <div className="grid grid-cols-1 gap-4">
        {suggestions.map((suggestion, index) => (
          <div 
            key={index}
            className={`bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6
              ${suggestion.priority === 'high' ? 'border-l-4 border-red-500 dark:border-red-400' : ''}
              ${suggestion.priority === 'medium' ? 'border-l-4 border-yellow-500 dark:border-yellow-400' : ''}
              ${suggestion.priority === 'low' ? 'border-l-4 border-green-500 dark:border-green-400' : ''}`}
          >
            <div className="flex items-start space-x-4">
              <span className="text-2xl">{suggestion.icon}</span>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">{suggestion.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{suggestion.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImprovementSuggestions; 