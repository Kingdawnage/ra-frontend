import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface ResumeUploadProps {
  onFileUpload: () => void;
  isAnalyzing?: boolean;
}

const ResumeUpload = ({ onFileUpload, isAnalyzing = false }: ResumeUploadProps) => {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0 && !isAnalyzing) {
      setFile(acceptedFiles[0]);
      onFileUpload();
    }
  }, [onFileUpload, isAnalyzing]);

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
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-500'}
          ${isAnalyzing ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1">Upload Your Resume</h3>
            <p className="text-sm text-gray-500">
              {isAnalyzing 
                ? 'Analysis in progress...' 
                : 'Drag and drop your resume or click to browse'
              }
            </p>
          </div>
          <button 
            className={`bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors
              ${isAnalyzing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
            disabled={isAnalyzing}
          >
            Choose File
          </button>
          <p className="text-xs text-gray-400">
            Supported formats: PDF, DOCX, DOC
          </p>
        </div>
      </div>
      {file && (
        <div className="mt-4 p-4 bg-green-50 rounded-lg">
          <p className="text-green-700 text-sm">
            Selected file: {file.name}
          </p>
        </div>
      )}
    </div>
  );
};

export default ResumeUpload; 