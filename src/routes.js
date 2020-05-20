import React, { useState, useEffect, useContext } from 'react';
import {
  ActivityIndicator,
  AsyncStorage
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './auth/authProvider';

import { Center } from './components/center';
import { AppTabs } from './layout/appTabs';
import { AuthStack } from './auth/authStack';

export const Routes = () => {
  const { user, login, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

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

    return () => {
      logout();
    }
  }, [])

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
    </NavigationContainer>
  );
}