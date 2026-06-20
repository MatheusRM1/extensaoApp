import React from 'react';

export const ResponsibleCard = ({ responsible, className = '' }) => (
  <div className={`bg-white p-4 rounded-2xl flex items-center gap-4 shadow-sm border border-gray-50 ${className}`}>
    <div className="w-12 h-12 rounded-full bg-[#C32128] flex items-center justify-center text-white font-bold text-lg shrink-0">
      {responsible.initial}
    </div>
    <div className="flex-1 overflow-hidden">
      <p className="text-[15px] font-bold text-[#0a1128] truncate">{responsible.name}</p>
      <div className="flex items-center gap-1.5 text-gray-500 mt-0.5">
        <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
        <p className="text-[13px] truncate">{responsible.email}</p>
      </div>
    </div>
  </div>
);