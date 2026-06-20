import React from 'react';

export const ContactHeader = ({ title, onBack }) => (
  <div className="px-6 pt-12 pb-4 bg-white z-10 shrink-0">
    <button 
      onClick={onBack}
      className="flex items-center gap-2 text-[#C32128] font-semibold text-[15px] mb-6 hover:opacity-80 transition-opacity"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
      </svg>
      Voltar
    </button>

    <h1 className="text-[22px] font-extrabold text-[#0a1128] leading-tight mb-1">
      Contato com coordenador
    </h1>
    <p className="text-[13px] text-gray-500 truncate">{title}</p>
  </div>
);