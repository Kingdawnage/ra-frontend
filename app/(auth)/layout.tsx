import { ReactNode } from 'react';
import { ThemeToggle } from '@/app/components/ThemeToggle';
import { ThemeProvider } from '../components/ThemeProvider';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 relative">
      <ThemeProvider>
        <ThemeToggle position="absolute" className="top-4 right-4 scale-200" />
      </ThemeProvider>
        <div className="max-w-md w-full space-y-8">
          {children}
      </div>
    </div>
  );
} 