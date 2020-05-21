import React from 'react';
import { LocationProvider } from './providers/locationProvider';
import { AuthProvider } from './providers/authProvider';
import { Stage } from './stage';

export const Providers = () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <Stage />
      </AuthProvider>
    </LocationProvider>
  );
};