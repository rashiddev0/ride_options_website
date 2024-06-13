'use client'; // This directive marks the component as a Client Component

import React, { useState } from 'react';
import RideOption from '@/Icons/logo';
import DownloadSvg from '@/Icons/download';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Ensure you have react-icons installed

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between p-4 shadow-md font-onest">
      <div className="w-full flex items-center justify-between px-4 md:px-16 lg:px-32">
        <div className="flex items-center">
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
            <RideOption />
          </div>
          <span className="hidden md:inline ml-2 text-lg md:text-xl font-semibold text-[#6D41A2]" style={{ fontSize: '24px', fontWeight: 700, lineHeight: '28.64px', textAlign: 'left' }}>Ride Options</span>
        </div>
        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isMenuOpen ? <AiOutlineClose className="w-6 h-6" /> : <AiOutlineMenu className="w-6 h-6" />}
          </button>
        </div>
        <div className="hidden md:flex items-center justify-center flex-1">
          <nav className="flex items-center space-x-6 lg:space-x-12">
            <a href="/" className="text-gray-700 hover:text-[#6D41A2] text-base">Home</a>
            <a href="/about" className="text-gray-700 hover:text-[#6D41A2]">About</a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-[#6D41A2]">
                Packages
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute left-0 hidden mt-2 w-48 md:w-[260px] bg-white border border-gray-200 rounded-[20px] shadow-lg group-hover:block transition delay-200" style={{ boxShadow: '0px 22px 74px 0px #0000001A', top: '48px' }}>
                <a href="/packages/package1" className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Bike
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
                <a href="/packages/package2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Auto</a>
                <a href="/packages/package3" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Ride</a>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-[#6D41A2]">
                Deals-in
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute left-0 hidden mt-2 w-48 md:w-[260px] bg-white border border-gray-200 rounded-[20px] shadow-lg group-hover:block transition delay-200" style={{ boxShadow: '0px 22px 74px 0px #0000001A', top: '48px' }}>
                <a href="/deals/deal1" className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Deal 1
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
                <a href="/deals/deal2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Deal 2</a>
              </div>
            </div>
            <a href="/requirements" className="text-gray-700 hover:text-[#6D41A2]">Requirements</a>
          </nav>
        </div>
        <a
          href="/download"
          className="hidden md:flex items-center justify-center w-12 h-12 md:w-[170px] md:h-[54px] px-4 md:px-[20px] py-2 gap-2 md:gap-[8px] text-[#6D41A2] bg-[#6D41A226] rounded-[8px] shadow-md hover:bg-[#6D41A2] hover:text-white transition-colors"
        >
          <span className="hidden md:inline text-sm md:text-base" style={{ opacity: 1, alignContent: 'center', fontSize: '14px' }}>Download app</span>
          <DownloadSvg className="w-6 h-6 md:w-4 md:h-4" />
        </a>
      </div>
      {isMenuOpen && (
        <div className="flex flex-col items-center md:hidden fixed top-0 left-0 w-full h-full bg-white z-10 p-4">
          <div className="flex items-center justify-between w-full mb-4">
            <div className="w-10 h-10 flex items-center justify-center">
              <RideOption />
            </div>
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <AiOutlineClose className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-4">
            <a href="/" className="text-gray-700 hover:text-[#6D41A2]">Home</a>
            <a href="/about" className="text-gray-700 hover:text-[#6D41A2]">About</a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-[#6D41A2]">
                Packages
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute left-0 hidden mt-2 w-48 bg-white border border-gray-200 rounded-[20px] shadow-lg group-hover:block transition delay-200" style={{ boxShadow: '0px 22px 74px 0px #0000001A', top: '48px' }}>
                <a href="/packages/package1" className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Bike
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
                <a href="/packages/package2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Auto</a>
                <a href="/packages/package3" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Ride</a>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-[#6D41A2]">
                Deals-in
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute left-0 hidden mt-2 w-48 bg-white border border-gray-200 rounded-[20px] shadow-lg group-hover:block transition delay-200" style={{ boxShadow: '0px 22px 74px 0px #0000001A', top: '48px' }}>
                <a href="/deals/deal1" className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Deal 1
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
                <a href="/deals/deal2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Deal 2</a>
              </div>
            </div>
            <a href="/requirements" className="text-gray-700 hover:text-[#6D41A2]">Requirements</a>
            <a
              href="/download"
              className="flex items-center justify-center w-full px-4 py-2 gap-2 text-[#6D41A2] bg-[#6D41A226] rounded-[8px] shadow-md hover:bg-[#6D41A2] hover:text-white transition-colors"
            >
              <span className="text-base" style={{ opacity: 1, alignContent: 'center' }}>Download app</span>
              <DownloadSvg className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
