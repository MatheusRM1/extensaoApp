import React, { useState } from 'react';

import HomeScreen from './app/screens/HomeScreen';
import LoginScreen from '~/screens/LoginScreen';
import { useLogin } from '~/hooks/useLogin';


export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  const { matricula, setMatricula, senha, setSenha } = useLogin();

  const handleLogin = () => {
    setCurrentScreen('home');
  };

  return (
    <>
      {currentScreen === 'login' && (
        <LoginScreen
          matricula={matricula}
          setMatricula={setMatricula}
          senha={senha}
          setSenha={setSenha}
          onLogin={handleLogin} 
        />
      )}
      {currentScreen === 'home' && <HomeScreen />}
    </>
  );
}