import React from 'react';
import { DeviceMockup } from '~/components/layout/DeviceMockup';
import { LoginForm } from '~/components/login/LoginForm';
import { LoginHeader } from '~/components/login/LoginHeader';

export default function LoginScreen() {
  return (
    <DeviceMockup>
      <LoginHeader />
      <LoginForm />
    </DeviceMockup>
  );
}