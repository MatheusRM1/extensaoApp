import React from 'react';
import { DeviceMockup } from '../components/layout/DeviceMockup';
import { LoginHeader } from '../components/login/LoginHeader';
import { LoginForm } from '../components/login/LoginForm';

export default function LoginScreen({ onLogin }) {
  return (
    <DeviceMockup>
      <LoginHeader />
      <LoginForm onLogin={onLogin} />
    </DeviceMockup>
  );
}