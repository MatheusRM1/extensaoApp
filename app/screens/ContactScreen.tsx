import React from 'react';
import { DeviceMockup } from '../components/layout/DeviceMockup';
import { useContact } from '../hooks/useContact';
import { ContactHeader } from '../components/contact/ContactHeader';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactSuccess } from '../components/contact/ContactSucess';

export default function ContactScreen({ acao, onBack, onHome }) {
  const { mensagem, setMensagem, isSubmitted, handleSend, handleSendAnother } = useContact();

  if (!acao) return null;

  return (
    <DeviceMockup>
      <div className="absolute inset-0 bg-[#f4f5f7] z-20 flex flex-col rounded-[32px] overflow-hidden">
        
        <ContactHeader title={acao.title} onBack={onBack} />

        <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {!isSubmitted ? (
            <ContactForm 
              acao={acao}
              mensagem={mensagem}
              setMensagem={setMensagem}
              onSend={handleSend}
            />
          ) : (
            <ContactSuccess 
              onHome={onHome}
              onSendAnother={handleSendAnother}
            />
          )}
        </div>

      </div>
    </DeviceMockup>
  );
}