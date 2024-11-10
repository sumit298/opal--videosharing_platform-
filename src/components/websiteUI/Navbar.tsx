"use client"
import React, { useState } from 'react';
import { Video, ChevronDown, Menu } from 'lucide-react';

const NavBar = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-4 h-16 mx-auto max-w-7xl">
        {/* Left section */}
        <div className="flex items-center space-x-8">
          {/* Logo and brand */}
          <div className="flex items-center space-x-2">
            <Video className="w-8 h-8 text-blue-600" />
            <span className="text-xl text-blue-500 font-bold">VideoShare</span>
          </div>
          
          {/* Navigation items */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="/features" className="text-gray-700 hover:text-blue-600 transition-colors">
              Features
            </a>
            <div className="relative">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isResourcesOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200">
                  <div className="py-1">
                    <a href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Blog
                    </a>
                    <a href="/support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Support
                    </a>
                    <a href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Contact Us
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Upload Video
          </button>
          
          {/* Mobile menu button */}
          <button className="md:hidden inline-flex items-center justify-center p-2 text-gray-700 hover:text-blue-600 focus:outline-none">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;