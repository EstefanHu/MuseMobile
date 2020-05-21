import React from 'react';
import { LocationProvider } from './providers/locationProvider';
import { AuthProvider } from './providers/authProvider';
import { Stage } from './stage';
import { GenreProvider } from './providers/genreProvider';

export const Context = () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <GenreProvider>
          <Stage />
        </GenreProvider>
      </AuthProvider>
    </LocationProvider>
  );
};