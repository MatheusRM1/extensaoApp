import React from 'react';
import { DeviceMockup } from '../components/layout/DeviceMockup';

export default function DetailsScreen({ acao, onBack }) {
  if (!acao) return null;

  return (
    <DeviceMockup>
      <div className="absolute inset-0 bg-[#f4f5f7] z-20 flex flex-col rounded-[32px] overflow-hidden">
        
        <div className="px-6 pt-12 pb-4 bg-white z-10">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[#C32128] font-semibold text-[15px] mb-6 hover:opacity-80 transition-opacity"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Voltar
          </button>

          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">{acao.areaIcon}</span>
            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">{acao.area}</span>
          </div>

          <h1 className="text-[22px] font-extrabold text-[#0a1128] leading-tight mb-2">
            {acao.title}
          </h1>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pt-6 pb-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-50">
              <div className="flex items-center gap-1.5 text-gray-400 mb-1">
                <svg className="w-4 h-4 text-[#C32128]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span className="text-[10px] font-bold uppercase tracking-wider">Modalidade</span>
              </div>
              <p className="text-[15px] font-bold text-[#0a1128]">{acao.modality}</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-50">
              <div className="flex items-center gap-1.5 text-gray-400 mb-1">
                <svg className="w-4 h-4 text-[#C32128]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span className="text-[10px] font-bold uppercase tracking-wider">Carga Horária</span>
              </div>
              <p className="text-[15px] font-bold text-[#0a1128]">{acao.hours}</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-50">
              <div className="flex items-center gap-1.5 text-gray-400 mb-1">
                <svg className="w-4 h-4 text-[#C32128]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                <span className="text-[10px] font-bold uppercase tracking-wider">Área</span>
              </div>
              <p className="text-[15px] font-bold text-[#0a1128]">{acao.area}</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-50">
              <div className="flex items-center gap-1.5 text-gray-400 mb-1">
                <svg className="w-4 h-4 text-[#C32128]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span className="text-[10px] font-bold uppercase tracking-wider">Período</span>
              </div>
              <p className="text-[15px] font-bold text-[#0a1128]">{acao.period}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#e8f5e9] py-2 px-3 rounded-xl w-fit mb-8">
            <div className="w-2 h-2 rounded-full bg-green-600"></div>
            <span className="text-[13px] font-bold text-green-700">{acao.status}</span>
            <span className="text-gray-300">|</span>
            <span className="text-[13px] text-gray-500">{acao.department}</span>
          </div>

          <div className="mb-8">
            <h3 className="text-[17px] font-bold text-[#0a1128] mb-3">Sobre o projeto</h3>
            <p className="text-[15px] text-gray-500 leading-relaxed">
              {acao.description}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-[17px] font-bold text-[#0a1128] mb-4">Atividades dos participantes</h3>
            <div className="flex flex-col gap-4">
              {acao.activities.map((activity, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[11px] font-bold text-[#C32128]">{index + 1}</span>
                  </div>
                  <p className="text-[15px] text-[#0a1128] leading-snug">{activity}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-[17px] font-bold text-[#0a1128] mb-4">Responsável</h3>
            <div className="bg-white p-4 rounded-2xl flex items-center gap-4 shadow-sm border border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#C32128] flex items-center justify-center text-white font-bold text-lg">
                {acao.responsible.initial}
              </div>
              <div className="flex-1">
                <p className="text-[15px] font-bold text-[#0a1128]">{acao.responsible.name}</p>
                <p className="text-[13px] text-gray-500">{acao.responsible.email}</p>
              </div>
              <svg className="w-5 h-5 text-[#C32128]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>

          <button className="w-full bg-[#C32128] hover:bg-[#a81920] text-white font-bold rounded-2xl py-4 shadow-lg shadow-red-500/30 transition-all mb-4">
            Entrar em contato
          </button>
          <button className="w-full bg-red-50 hover:bg-red-100 text-[#C32128] font-bold rounded-2xl py-4 flex items-center justify-center gap-2 transition-all border border-red-100 mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            Demonstrar interesse
          </button>

        </div>
      </div>
    </DeviceMockup>
  );
}