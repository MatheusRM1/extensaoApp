import React from 'react';

export const DeviceMockup = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 font-sans">
      <div className="relative w-[375px] h-[812px] bg-[#C32128] rounded-[40px] shadow-2xl overflow-hidden border-[12px] border-gray-900">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[25px] bg-gray-900 rounded-b-2xl z-20"></div>
        <div className="absolute top-[-40px] left-[-40px] w-56 h-56 bg-[#a81920] rounded-full opacity-60"></div>
        <div className="absolute top-[60px] right-[-60px] w-64 h-64 bg-[#a81920] rounded-full opacity-60"></div>
        <div className="relative z-10 flex flex-col h-full pt-20">
          {children}
        </div>
      </div>
    </div>
  );
};