import React from 'react';

export const HomeHeader = () => {
  return (
    <div className="flex justify-between items-center px-6 pt-6 pb-4">
      <div>
        <p className="text-gray-500 text-sm font-medium">Olá, Matheus 👋</p>
        <h1 className="text-[22px] font-bold text-gray-900 leading-tight mt-1">Encontrar ações de extensão</h1>
      </div>
      <div className="w-12 h-12 bg-[#C32128] rounded-full flex items-center justify-center shadow-sm shrink-0">
        <span className="text-white font-bold text-lg">MA</span>
      </div>
    </div>
  );
};