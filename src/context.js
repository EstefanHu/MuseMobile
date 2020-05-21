import React from 'react';
import { LocationProvider } from './providers/locationProvider';
import { AuthProvider } from './providers/authProvider';
import { GenreProvider } from './providers/genreProvider';
import { FeedProvider } from './providers/feedProvider';
import { LibraryProvider } from './providers/libraryProvider';
import { PortfolioProvider } from './providers/portfolioProvider';

import { Stage } from './stage';

export const Context = () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <GenreProvider>
          <FeedProvider>
            <LibraryProvider>
              <PortfolioProvider>
                <Stage />
              </PortfolioProvider>
            </LibraryProvider>
          </FeedProvider>
        </GenreProvider>
      </AuthProvider>
    </LocationProvider>
  );
};