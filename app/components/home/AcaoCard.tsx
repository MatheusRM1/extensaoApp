import React from 'react';

export const AcaoCard = ({ acao, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white p-5 rounded-3xl shadow-sm mb-4 border border-gray-50 cursor-pointer hover:shadow-md transition-shadow active:scale-[0.98]"
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">{acao.areaIcon}</span>
          <span className="text-[13px] font-semibold text-gray-500">{acao.area}</span>
        </div>
        <button className="text-gray-300 hover:text-gray-400 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
        </button>
      </div>
      
      <h3 className="text-[15px] font-bold text-[#0a1128] mb-4 leading-snug">
        {acao.title}
      </h3>
      
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-lg">
          <div className={`w-1.5 h-1.5 rounded-full bg-current ${acao.color}`}></div>
          <span className={`text-[11px] font-bold ${acao.color}`}>{acao.modality}</span>
        </div>
        
        <div className="flex items-center gap-1 bg-gray-50 px-2.5 py-1.5 rounded-lg text-gray-500">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span className="text-[11px] font-semibold">{acao.hours}</span>
        </div>
        
        <div className="bg-red-50 px-2.5 py-1.5 rounded-lg ml-auto">
          <span className="text-[11px] font-bold text-[#C32128]">{acao.status}</span>
        </div>
      </div>
    </div>
  );
};