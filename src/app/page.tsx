"use client"
import AIEnhancement from '@/components/websiteUI/AIEnhancement';
import CallToAction from '@/components/websiteUI/CallToAction';
import FeatureList from '@/components/websiteUI/FeatureList';
import Features from '@/components/websiteUI/Features';
import Footer from '@/components/websiteUI/Footer';
import Header from '@/components/websiteUI/Header';
import Sharing from '@/components/websiteUI/Sharing';
import Testimonial from '@/components/websiteUI/Testimonial';
import React from 'react';
// import Header from './Header';
// import Features from './Features';
// import Sharing from './Sharing';
// import AIEnhancement from './AIEnhancement';
// import FeatureList from './FeatureList';
// import CallToAction from './CallToAction';
// import Testimonial from './Testimonial';
// import Footer from './Footer';


const LandingPage: React.FC = () => {
  const handleGetStarted = () => {
    // Implement get started functionality
    console.log('Get Started clicked');
  };

  const handleLearnMore = () => {
    // Implement learn more functionality
    console.log('Learn More clicked');
  };

  return (
    <div className="flex overflow-hidden flex-col">
      <Header onGetStarted={handleGetStarted} onLearnMore={handleLearnMore} />
      <Features />
      <Sharing />
      <AIEnhancement />
      <FeatureList />
      <CallToAction onGetStarted={handleGetStarted} onLearnMore={handleLearnMore} />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default LandingPage;