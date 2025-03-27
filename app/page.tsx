'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import ResumeUpload from './components/ResumeUpload';
import AnalysisResults from './components/AnalysisResults';
import ImprovementSuggestions from './components/ImprovementSuggestions';
import LoadingAnalysis from './components/LoadingAnalysis';

export default function Home() {
  const [showResults, setShowResults] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisData] = useState({
    overallScore: 85,
    skillsMatch: 90,
    experienceLevel: 75,
    education: 95,
  });

  const handleFileUpload = async () => {
    setIsAnalyzing(true);
    
    // Simulate API call with timeout
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsAnalyzing(false);
    setShowResults(true);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ResumeUpload onFileUpload={handleFileUpload} isAnalyzing={isAnalyzing} />
            {isAnalyzing ? (
              <LoadingAnalysis />
            ) : (
              showResults && <AnalysisResults {...analysisData} />
            )}
          </div>
          
          {showResults && !isAnalyzing && (
            <div className="mt-12">
              <ImprovementSuggestions />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
