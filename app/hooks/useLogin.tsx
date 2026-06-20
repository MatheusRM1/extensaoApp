import { useState } from 'react';

export const useLogin = () => {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    console.log("Tentando logar com:", matricula);
  };

  return {
    matricula,
    setMatricula,
    senha,
    setSenha,
    handleLogin
  };
};