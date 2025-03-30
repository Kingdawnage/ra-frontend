interface AnalysisResultsProps {
  overallScore: number;
  skillsMatch: number;
  experienceLevel: number;
  education: number;
}

const AnalysisResults = ({
  overallScore,
  skillsMatch,
  experienceLevel,
  education
}: AnalysisResultsProps) => {
  return (
    <div className="w-full max-w-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Analysis Results</h2>
        <div className="flex space-x-2">
          <button className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          <button className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-8 border-blue-100 dark:border-blue-900/30 bg-blue-50 dark:bg-blue-900/20">
          <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">{overallScore}%</span>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-900 dark:text-white">Skills Match</span>
            <span className="text-sm text-gray-900 dark:text-white">{skillsMatch}%</span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            <div 
              className="h-2 bg-blue-600 dark:bg-blue-500 rounded-full" 
              style={{ width: `${skillsMatch}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-900 dark:text-white">Experience Level</span>
            <span className="text-sm text-gray-900 dark:text-white">{experienceLevel}%</span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            <div 
              className="h-2 bg-blue-600 dark:bg-blue-500 rounded-full" 
              style={{ width: `${experienceLevel}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-900 dark:text-white">Education</span>
            <span className="text-sm text-gray-900 dark:text-white">{education}%</span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            <div 
              className="h-2 bg-blue-600 dark:bg-blue-500 rounded-full" 
              style={{ width: `${education}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResults; 