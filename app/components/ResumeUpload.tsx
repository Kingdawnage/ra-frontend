import { useCallback, useState, Dispatch, SetStateAction } from 'react';
import { useDropzone } from 'react-dropzone';
import { uploadAndAnalyzeResume, ResumeAnalysis } from '@/app/services/resume';

interface ResumeUploadProps {
  onFileUpload: (analysisResult: ResumeAnalysis) => void;
  isAnalyzing?: boolean;
  setIsAnalyzing: Dispatch<SetStateAction<boolean>>;
}

const ResumeUpload = ({ onFileUpload, isAnalyzing = false, setIsAnalyzing }: ResumeUploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>('');
  const [uploadStatus, setUploadStatus] = useState<string>('');

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0 && !isAnalyzing) {
      const uploadedFile = acceptedFiles[0];
      setFile(uploadedFile);
      setError('');
      setUploadStatus('Uploading resume...');
      setIsAnalyzing(true);

      try {
        setUploadStatus('Analyzing resume...');
        const analysisResult = await uploadAndAnalyzeResume(uploadedFile);
        onFileUpload(analysisResult);
        setUploadStatus('');
      } catch (err) {
        console.error('Upload error:', err);
        setError(err instanceof Error ? err.message : 'Failed to analyze resume');
        setFile(null);
        setUploadStatus('');
      } finally {
        setIsAnalyzing(false);
      }
    }
  }, [onFileUpload, isAnalyzing, setIsAnalyzing]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    multiple: false,
    disabled: isAnalyzing
  });

  return (
    <div className="w-full max-w-md mx-auto p-6">
      {error && (
        <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
          <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
        </div>
      )}

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors duration-200
          ${isDragActive ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400'}
          ${isAnalyzing ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Upload Your Resume</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {uploadStatus || (isAnalyzing 
                ? 'Analysis in progress...' 
                : 'Drag and drop your resume or click to browse'
              )}
            </p>
          </div>
          <button 
            className={`bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-lg transition-colors duration-200
              ${isAnalyzing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700 dark:hover:bg-blue-600'}`}
            disabled={isAnalyzing}
          >
            Choose File
          </button>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Supported formats: PDF, DOCX, DOC
          </p>
        </div>
      </div>
      {file && !error && !uploadStatus && (
        <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <p className="text-green-700 dark:text-green-400 text-sm">
            Selected file: {file.name}
          </p>
        </div>
      )}
      {uploadStatus && (
        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-blue-700 dark:text-blue-400 text-sm">{uploadStatus}</p>
        </div>
      )}
    </div>
  );
};

export default ResumeUpload; 