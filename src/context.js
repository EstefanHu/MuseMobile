import React from 'react';
import { LocationProvider } from './providers/locationProvider';
import { AuthProvider } from './providers/authProvider';
import { FeedProvider } from './providers/feedProvider';
import { LibraryProvider } from './providers/libraryProvider';
import { PortfolioProvider } from './providers/portfolioProvider';
import { CurrentProvider } from './providers/currentProvider';

import { Stage } from './stage';

export const Context = () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <FeedProvider>
          <LibraryProvider>
            <PortfolioProvider>
              <CurrentProvider>
                <Stage />
              </CurrentProvider>
            </PortfolioProvider>
          </LibraryProvider>
        </FeedProvider>
      </AuthProvider>
    </LocationProvider>
  );
};