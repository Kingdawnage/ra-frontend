import { API_BASE_URL, getHeaders, handleResponse } from './api';

export interface ResumeAnalysis {
  meta: {
    timestamp: string;
    model_version: string;
  };
  debug?: {
    token_logits_shape: number[];
  };
  scores: {
    overall: number;
    model_score: number;
    readability: number;
    section_scores: {
      Name: number;
      Skills: number;
      Profile: number;
      Education: number;
      Experience: number;
    };
  };
  entities: {
    Name: string;
    Skills: string;
    Profile: string;
    Education: string;
    Experience: string;
    Projects?: string;
  };
  feedback: {
    general: string;
    sections: {
      Education?: string;
      Experience?: string;
      Skills?: string;
    };
  };
}

export interface Resume {
  id: string;
  user_id: string;
  file_path: string;
  analysisResult?: ResumeAnalysis;
  createdAt?: string;
}

/**
 * Upload a resume and get analysis results
 * @param file The resume file to upload
 * @returns Promise with the analysis results
 */
export const uploadAndAnalyzeResume = async (file: File): Promise<ResumeAnalysis> => {
  const formData = new FormData();
  formData.append('file', file);

  // Create headers without Content-Type as it's set automatically for FormData
  const headers = Object.fromEntries(
    Object.entries(getHeaders()).filter(([key]) => key !== 'Content-Type')
  );

  const response = await fetch(`${API_BASE_URL}/api/resumes/resume`, {
    method: 'POST',
    headers,
    body: formData,
  });

  const result = await handleResponse(response);
  
  if (!result.data?.resume?.analysis_result) {
    throw new Error('No analysis results received from the server');
  }

  return result.data.resume.analysis_result;
};

/**
 * Get all resumes for the current user
 */
export const getUserResumes = async (): Promise<Resume[]> => {
  const response = await fetch(`${API_BASE_URL}/api/resumes`, {
    headers: getHeaders(),
  });

  return handleResponse(response);
};

/**
 * Get a specific resume by ID
 */
export const getResumeById = async (resumeId: string): Promise<Resume> => {
  const response = await fetch(`${API_BASE_URL}/api/resumes/${resumeId}`, {
    headers: getHeaders(),
  });

  return handleResponse(response);
};

/**
 * Delete a resume by ID
 */
export const deleteResume = async (resumeId: string): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/api/resumes/${resumeId}`, {
    method: 'DELETE',
    headers: getHeaders(),
  });

  return handleResponse(response);
}; 