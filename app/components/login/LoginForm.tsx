import React from 'react';
import { useLogin } from '../../hooks/useLogin';
import { Input } from '../Input';
import { Button } from '../Button';

export const LoginForm = () => {
  const { matricula, setMatricula, senha, setSenha, handleLogin } = useLogin();

  return (
    <div className="flex-1 bg-white mt-2 rounded-t-[32px] px-6 pt-8 pb-6 flex flex-col">
      <h3 className="text-[22px] font-bold text-gray-900 mb-1">Bem-vindo(a)</h3>
      <p className="text-gray-500 text-[15px] mb-8">Entre com sua conta institucional UFJF</p>

      <div className="flex-1">
        <Input
          label="Matrícula"
          placeholder="Ex: 202312345"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
        />
        <Input
          label="Senha"
          type="password"
          placeholder="Sua senha SIGA"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <Button onClick={handleLogin} variant="primary">
          Entrar
        </Button>
        <div className="text-center mt-2">
          <Button variant="text">
            Recuperar acesso
          </Button>
        </div>
      </div>

      <div className="text-center pb-2">
        <p className="text-[12px] text-gray-400 px-4 leading-snug">
          Acesso exclusivo para alunos, docentes e técnicos da UFJF
        </p>
      </div>
    </div>
  );
};