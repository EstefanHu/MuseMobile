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

  useEffect(() => {
    // check if logged in or not
    AsyncStorage.getItem('user')
      .then(userString => {
        if (userString) login();
      })
      .catch(console.error);
    updateLocation()
    setLoading(false);

    // TODO: change to keep user logged in
    return () => logout();
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size='large' />
      </Center>
    )
  }

  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
      {/* <AppTabs /> */}
    </NavigationContainer>
  );
}