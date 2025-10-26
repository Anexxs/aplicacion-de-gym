import React, { useState, useEffect } from 'react';
import './ThemeToggle.css';

function ThemeToggle() {
  // Estado para saber si estamos en modo oscuro
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Cargar preferencia guardada al iniciar
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  // Función para cambiar el tema
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {isDarkMode ? '☀️' : '🌙'}
      <span className="toggle-text">
        {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </span>
    </button>
  );
}

export default ThemeToggle;