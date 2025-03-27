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
        <h2 className="text-xl font-semibold">Analysis Results</h2>
        <div className="flex space-x-2">
          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-8 border-blue-100">
          <span className="text-3xl font-bold text-blue-600">{overallScore}%</span>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Skills Match</span>
            <span className="text-sm text-gray-600">{skillsMatch}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-blue-600 rounded-full" 
              style={{ width: `${skillsMatch}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Experience Level</span>
            <span className="text-sm text-gray-600">{experienceLevel}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-blue-600 rounded-full" 
              style={{ width: `${experienceLevel}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Education</span>
            <span className="text-sm text-gray-600">{education}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-blue-600 rounded-full" 
              style={{ width: `${education}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mt-8 space-x-4 flex">
        <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          Save Results
        </button>
        <button className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors">
          Download Report
        </button>
      </div>
    </div>
  );
};

export default AnalysisResults; 