interface Suggestion {
  icon: string;
  title: string;
  description: string;
}

const ImprovementSuggestions = () => {
  const suggestions: Suggestion[] = [
    {
      icon: '💡',
      title: 'Add More Keywords',
      description: 'Include industry-specific keywords to improve visibility'
    },
    {
      icon: '📊',
      title: 'Quantify Achievements',
      description: 'Add metrics and numbers to showcase your impact'
    },
    {
      icon: '📝',
      title: 'Format Consistency',
      description: 'Maintain consistent formatting throughout your resume'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Improvement Suggestions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="bg-blue-50 rounded-lg p-6 transition-transform hover:scale-105"
          >
            <div className="flex items-start space-x-4">
              <span className="text-2xl">{suggestion.icon}</span>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">{suggestion.title}</h3>
                <p className="text-sm text-gray-700">{suggestion.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImprovementSuggestions; 