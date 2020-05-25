import React from 'react';
import { LocationProvider } from './providers/locationProvider';
import { AuthProvider } from './providers/authProvider';
import { FeedProvider } from './providers/feedProvider';
import { LibraryProvider } from './providers/libraryProvider';
import { PortfolioProvider } from './providers/portfolioProvider';

import { Stage } from './stage';

export const Context = () => {
  return (
    <LocationProvider>
      <AuthProvider>
          <FeedProvider>
            <LibraryProvider>
              <PortfolioProvider>
                <Stage />
              </PortfolioProvider>
            </LibraryProvider>
          </FeedProvider>
      </AuthProvider>
    </LocationProvider>
  );
};