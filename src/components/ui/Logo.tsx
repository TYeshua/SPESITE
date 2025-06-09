import React from 'react';

interface LogoProps {
  isScrolled: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled }) => {
  return (
    <div className="flex items-center">
      <span className={`font-bold text-2xl ${isScrolled ? 'text-blue-600' : 'text-white'}`}>SPE</span>
      <span className={`ml-1 font-light text-2xl ${isScrolled ? 'text-gray-700' : 'text-gray-200'}`}>UFPA</span>
    </div>
  );
};

export default Logo;