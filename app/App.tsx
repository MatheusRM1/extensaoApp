import React, { useState } from 'react';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [selectedAcao, setSelectedAcao] = useState(null);

  const handleOpenDetails = (acao) => {
    setSelectedAcao(acao);
    setCurrentScreen('details');
  };

  const handleBackToHome = () => {
    setSelectedAcao(null);
    setCurrentScreen('home');
  };

  return (
    <>
      {currentScreen === 'login' && (
        <LoginScreen onLogin={() => setCurrentScreen('home')} />
      )}
      {currentScreen === 'home' && (
        <HomeScreen onSelectAcao={handleOpenDetails} />
      )}
      {currentScreen === 'details' && (
        <DetailsScreen acao={selectedAcao} onBack={handleBackToHome} />
      )}
    </>
  );
}