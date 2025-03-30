'use client';

import { useTheme } from './ThemeProvider';

type ThemeToggleProps = {
  position?: 'fixed' | 'absolute' | 'relative';
  className?: string;
};

export function ThemeToggle({ position = 'fixed', className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  const positionClasses = {
    fixed: 'fixed top-4 right-4',
    absolute: 'absolute top-4 right-4',
    relative: 'relative'
  };

  return (
    <button
      onClick={toggleTheme}
      className={`${positionClasses[position]} rounded-lg 
        ${theme === 'light' 
          ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' 
          : 'bg-gray-700 text-white hover:bg-gray-600'
        } 
        transition-colors duration-200 ${className}`}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
} 