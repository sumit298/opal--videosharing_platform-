"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Camera, Play } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
  onLearnMore: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted, onLearnMore }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Record Personalized Videos",
      description: "Create engaging content that resonates with your audience"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "AI-Powered Analytics",
      description: "Track engagement and optimize your content strategy"
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Share Seamlessly",
      description: "Distribute your videos across multiple platforms effortlessly"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-[80vh] bg-white">
      {/* Left Content Section */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 px-6 lg:px-16 py-12 lg:py-24">
        <div className="flex items-center gap-2 mb-6">
          <Camera className="w-6 h-6 text-blue-600" />
          <span className="text-blue-600 font-semibold">AI-Powered Platform</span>
        </div>
        
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
          Transform Your Prospecting with AI-Powered Videos
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Elevate your sales strategy by recording and sharing personalized videos effortlessly. 
          Engage your prospects like never before with our innovative web application.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <button
            onClick={onGetStarted}
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Play className="w-5 h-5" />
            Get Started
          </button>
          <button
            onClick={onLearnMore}
            className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative w-full lg:w-1/2 h-[600px] lg:h-auto overflow-hidden bg-gray-100">
        <div className="relative h-full">
          {/* Main Image */}
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          
          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              {slides[currentSlide].title}
            </h2>
            <p className="text-white/90">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center">
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;