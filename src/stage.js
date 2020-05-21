import React, { useState, useEffect, useContext } from 'react';
import {
  ActivityIndicator,
  AsyncStorage
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { LocationContext } from './providers/locationProvider';
import { AuthContext } from './providers/authProvider';

import { Center } from './components/center';
import { AppTabs } from './layout/appTabs';
import { AuthStack } from './stacks/authStack';

export const Stage = () => {
  const { updateLocation } = useContext(LocationContext);
  const { user, login, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [hasFeed, setHasFeed] = useState(false);

  useEffect(() => {
    // check if logged in or not
    AsyncStorage.getItem('user')
      .then(userString => {
        if (userString) {
          login();
        }
        setLoading(false);
      }).catch(err => {
        console.log(err);
        setLoading(false);
      });
    
    updateLocation()

    return () => {
      logout();
    }
  }, []);

  useEffect(() => {
    if (!hasFeed) {
      console.log('feed');
      setHasFeed(true);
    }
  }, [hasFeed]);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size='large' />
      </Center>
    )
  }

  return (
    <NavigationContainer>
      {/* {user ? <AppTabs /> : <AuthStack />} */}
      <AppTabs />
    </NavigationContainer>
  );
}