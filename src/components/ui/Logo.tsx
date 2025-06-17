import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface LogoProps {
  isScrolled: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="flex items-center">
      <span className={`font-bold text-2xl ${
        isScrolled 
          ? 'text-blue-600 dark:text-blue-400' 
          : 'text-white'
      }`}>SPE</span>
      <span className={`ml-1 font-light text-2xl ${
        isScrolled 
          ? 'text-gray-700 dark:text-gray-300' 
          : 'text-gray-200'
      }`}>Macaé</span>
    </div>
  );
};

export default Logo;