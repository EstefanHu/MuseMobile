import React from 'react';
import { AuthProvider } from './authProvider';
import { Routes } from './routes';

export const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};