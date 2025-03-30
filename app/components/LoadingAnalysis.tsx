const LoadingAnalysis = () => {
  return (
    <div className="w-full max-w-md p-6">
      <div className="animate-pulse space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="h-6 bg-blue-200 dark:bg-blue-800/50 rounded w-32"></div>
          <div className="flex space-x-2">
            <div className="h-8 w-8 bg-blue-200 dark:bg-blue-800/50 rounded"></div>
            <div className="h-8 w-8 bg-blue-200 dark:bg-blue-800/50 rounded"></div>
          </div>
        </div>

        {/* Score Circle */}
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-full bg-blue-200 dark:bg-blue-800/50"></div>
        </div>

        {/* Progress Bars */}
        <div className="space-y-6">
          {[1, 2, 3].map((index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <div className="h-4 bg-blue-200 dark:bg-blue-800/50 rounded w-24"></div>
                <div className="h-4 bg-blue-200 dark:bg-blue-800/50 rounded w-12"></div>
              </div>
              <div className="h-2 bg-blue-200 dark:bg-blue-800/50 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <div className="flex-1 h-10 bg-blue-200 dark:bg-blue-800/50 rounded-lg"></div>
          <div className="flex-1 h-10 bg-blue-200 dark:bg-blue-800/50 rounded-lg"></div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <div className="inline-flex items-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-blue-600 dark:text-blue-400 font-medium">Analyzing your resume...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnalysis; 