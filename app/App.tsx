import React, { useState } from 'react';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { useLogin } from './hooks/useLogin';

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