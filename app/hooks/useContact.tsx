import { useState } from 'react';

export const useContact = () => {
  const [mensagem, setMensagem] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSend = () => {
    setIsSubmitted(true);
  };

  const handleSendAnother = () => {
    setMensagem('');
    setIsSubmitted(false);
  };

  return {
    mensagem,
    setMensagem,
    isSubmitted,
    handleSend,
    handleSendAnother
  };
};