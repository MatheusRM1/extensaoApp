import React from 'react';

export const ContactSuccess = ({ onHome, onSendAnother }) => (
  <div className="px-6 pt-16 pb-10 flex flex-col items-center h-full text-center animate-fade-in">
    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6">
      <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    </div>
    
    <h2 className="text-[24px] font-extrabold text-[#0a1128] mb-4">Mensagem enviada!</h2>
    
    <p className="text-[15px] text-gray-500 leading-relaxed mb-auto px-4">
      Mensagem enviada com sucesso. O coordenador receberá sua solicitação e responderá em breve pelo e-mail institucional.
    </p>

    <div className="w-full mt-10">
      <button 
        onClick={onHome}
        className="w-full bg-[#C32128] hover:bg-[#a81920] text-white font-bold rounded-2xl py-4 shadow-lg shadow-red-500/30 transition-all mb-3"
      >
        Voltar ao início
      </button>
      <button 
        onClick={onSendAnother}
        className="w-full text-gray-500 hover:text-gray-700 font-semibold rounded-2xl py-4 transition-all"
      >
        Enviar outra mensagem
      </button>
    </div>
  </div>
);