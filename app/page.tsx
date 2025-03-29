'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import ResumeUpload from './components/ResumeUpload';
import AnalysisResults from './components/AnalysisResults';
import ImprovementSuggestions from './components/ImprovementSuggestions';
import LoadingAnalysis from './components/LoadingAnalysis';
import type { ResumeAnalysis } from './services/resume';

export default function Home() {
  const [showResults, setShowResults] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisData, setAnalysisData] = useState<{
    overallScore: number;
    skillsMatch: number;
    experienceLevel: number;
    education: number;
  }>({
    overallScore: 0,
    skillsMatch: 0,
    experienceLevel: 0,
    education: 0,
  });

  const handleFileUpload = async (result: ResumeAnalysis) => {
    try {
      // Convert the analysis result to our component's format
      const scores = result.scores.section_scores;
      
      // Convert scores to percentages (0-100)
      setAnalysisData({
        // Convert negative score to percentage (0-100)
        overallScore: Math.round((result.scores.overall + 1) * 50), // Convert -1 to 1 range to 0-100
        skillsMatch: Math.round(scores.Skills * 100),
        experienceLevel: Math.round(scores.Experience * 100),
        education: Math.round(scores.Education * 100),
      });
      
      setShowResults(true);
    } catch (err) {
      console.error('Error processing analysis results:', err);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ResumeUpload 
              onFileUpload={handleFileUpload} 
              isAnalyzing={isAnalyzing} 
              setIsAnalyzing={setIsAnalyzing}
            />
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
