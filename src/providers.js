import React from 'react';
import { LocationProvider } from './providers/locationProvider';
import { AuthProvider } from './providers/authProvider';
import { Routes } from './routes';

export const Providers = () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </LocationProvider>
  );
};