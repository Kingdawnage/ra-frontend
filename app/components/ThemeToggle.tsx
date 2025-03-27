'use client';

import { useTheme } from './ThemeProvider';

type ThemeToggleProps = {
  position?: 'fixed' | 'absolute';
  className?: string;
};

export function ThemeToggle({ position = 'fixed', className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`${position === 'fixed' ? 'fixed top-4 right-4' : 'absolute top-4 right-4'} p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-200 text-xl ${className}`}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
} 