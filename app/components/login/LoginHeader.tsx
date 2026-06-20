import React from 'react';

export const LoginHeader = () => {
  return (
    <div className="px-6 pb-6 text-center">
      <div className="mx-auto w-20 h-20 bg-white rounded-[24px] flex items-center justify-center shadow-sm mb-6">
        <svg className="w-10 h-10 text-[#C32128]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14l9-5-9-5-9 5 9 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </div>
      <h2 className="text-white text-[10px] font-bold tracking-widest mb-2 uppercase">
        Universidade Federal de Juiz de Fora
      </h2>
      <h1 className="text-white text-[32px] font-extrabold mb-1 tracking-tight">
        Extensão UFJF
      </h1>
      <p className="text-white text-[13px] opacity-90">
        Ações de extensão para a sua jornada acadêmica
      </p>
    </div>
  );
};