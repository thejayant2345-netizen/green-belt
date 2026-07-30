'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('remitsaver-theme') as 'dark' | 'light' | null;
    const initialTheme = savedTheme ?? 'dark';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    window.localStorage.setItem('remitsaver-theme', nextTheme);
  };

  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme}>
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
