import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-sm">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 flex items-center">
          <span className="mr-2">📄</span>
          ResumeAI
        </Link>
      </div>
      
      <div className="flex items-center space-x-6">
        <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
        <Link href="/features" className="text-gray-600 hover:text-gray-900">Features</Link>
        <Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
        <Link 
          href="/login" 
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 