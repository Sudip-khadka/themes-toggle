// src/context/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Retrieve the initial theme mode from localStorage, defaulting to 'light' if not set
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [isDarkMode, setIsDarkMode] = useState(savedTheme === 'dark');

  // Function to toggle theme mode
  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light'); // Store the new theme mode in localStorage
      return newMode;
    });
  };

  // Effect to update the theme mode when component mounts
  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode); // Apply dark mode class to body
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
