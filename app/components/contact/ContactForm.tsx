import React from 'react';
import { ResponsibleCard } from '../shared/ResponsibleCard';

export const ContactForm = ({ acao, mensagem, setMensagem, onSend }) => (
  <div className="px-6 pt-6 pb-10 flex flex-col h-full">
    <ResponsibleCard responsible={acao.responsible} className="mb-6 shrink-0" />

    <div className="bg-[#fff9e6] rounded-2xl p-4 flex gap-3 mb-8 border border-yellow-100 shrink-0">
      <span className="text-lg">💡</span>
      <p className="text-[13px] text-[#b38600] leading-snug">
        Apresente-se brevemente, informe seu curso e mencione por que tem interesse neste projeto.
      </p>
    </div>

    <div className="flex-1 flex flex-col min-h-[250px]">
      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-4">
        Sua dúvida ou interesse
      </label>
      
      <textarea
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        placeholder="Olá, sou estudante de... e tenho interesse neste projeto porque..."
        className="w-full flex-1 bg-transparent text-[#0a1128] text-[15px] placeholder-gray-400 outline-none resize-none"
      />
      
      <div className="text-right text-[12px] text-gray-400 mb-6 mt-2">
        {mensagem.length} caracteres
      </div>

      <button 
        onClick={onSend}
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
);