import React, { useState } from 'react';
import { DeviceMockup } from '../components/layout/DeviceMockup';

export default function ContactScreen({ acao, onBack }) {
  const [mensagem, setMensagem] = useState('');

  if (!acao) return null;

  return (
    <DeviceMockup>
      <div className="absolute inset-0 bg-[#f4f5f7] z-20 flex flex-col rounded-[32px] overflow-hidden">
        
        {/* Cabeçalho */}
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

          <h1 className="text-[22px] font-extrabold text-[#0a1128] leading-tight mb-1">
            Contato com coordenador
          </h1>
          <p className="text-[13px] text-gray-500">{acao.title}</p>
        </div>

        {/* Corpo da Tela */}
        <div className="flex-1 overflow-y-auto px-6 pt-6 pb-10 flex flex-col [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          
          {/* Card do Responsável */}
          <div className="bg-white p-4 rounded-2xl flex items-center gap-4 shadow-sm border border-gray-50 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#C32128] flex items-center justify-center text-white font-bold text-lg">
              {acao.responsible.initial}
            </div>
            <div>
              <p className="text-[15px] font-bold text-[#0a1128]">{acao.responsible.name}</p>
              <div className="flex items-center gap-1.5 text-gray-500 mt-0.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <p className="text-[13px]">{acao.responsible.email}</p>
              </div>
            </div>
          </div>

          {/* Dica */}
          <div className="bg-[#fff9e6] rounded-2xl p-4 flex gap-3 mb-8 border border-yellow-100">
            <span className="text-lg">💡</span>
            <p className="text-[13px] text-[#b38600] leading-snug">
              Apresente-se brevemente, informe seu curso e mencione por que tem interesse neste projeto.
            </p>
          </div>

          {/* Formulário de Mensagem */}
          <div className="flex-1 flex flex-col">
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-4">
              Sua dúvida ou interesse
            </label>
            
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Olá, sou estudante de... e tenho interesse neste projeto porque..."
              className="w-full flex-1 min-h-[150px] bg-transparent text-[#0a1128] text-[15px] placeholder-gray-400 outline-none resize-none"
            />
            
            <div className="text-right text-[12px] text-gray-400 mb-6 mt-2">
              {mensagem.length} caracteres
            </div>

            <button 
              disabled={mensagem.trim() === ''}
              className={`w-full font-bold rounded-2xl py-4 transition-all mt-auto ${
                mensagem.trim() === '' 
                  ? 'bg-[#e5e7eb] text-[#9ca3af] cursor-not-allowed' 
                  : 'bg-[#C32128] hover:bg-[#a81920] text-white shadow-lg shadow-red-500/30'
              }`}
            >
              Enviar mensagem
            </button>
          </div>

        </div>
      </div>
    </DeviceMockup>
  );
}