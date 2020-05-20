import React from 'react';
import { AuthProvider } from './auth/authProvider';
import { Routes } from './routes';

export const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};  