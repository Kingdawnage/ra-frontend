import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center transition-colors duration-200">
          <span className="mr-2">📄</span>
          ResumeAI
        </Link>
      </div>
      
      <div className="flex-1 flex justify-center">
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">Home</Link>
          <Link href="/features" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">Features</Link>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">Pricing</Link>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <ThemeToggle position="relative" className="!p-2 h-[38px] w-[38px] flex items-center justify-center" />
        <Link 
          href="/login" 
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-200"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 