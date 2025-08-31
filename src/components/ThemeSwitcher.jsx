import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import './ThemeSwitcher.css'; 

const ThemeSwitcher = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button className="theme-button" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
};

export default ThemeSwitcher;
