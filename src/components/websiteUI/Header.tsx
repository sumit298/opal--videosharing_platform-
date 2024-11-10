import React from 'react';
import NavBar from './Navbar'
import HeroSection from './HeroSection';

interface HeaderProps {
  onGetStarted: () => void;
  onLearnMore: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGetStarted, onLearnMore }) => {
  return (
    <header className="flex overflow-hidden flex-col w-full bg-white min-h-[900px] max-md:max-w-full">
      <NavBar />
      <HeroSection onGetStarted={onGetStarted} onLearnMore={onLearnMore} />
    </header>
  );
};

export default Header;