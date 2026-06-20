import React from 'react';

export const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyle = "transition-all ";
  
  const variants = {
    primary: "w-full bg-[#C32128] hover:bg-[#a81920] text-white font-bold rounded-[14px] py-4 shadow-lg shadow-red-500/30 mb-4",
    text: "text-[#C32128] font-medium text-[15px] hover:underline"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};