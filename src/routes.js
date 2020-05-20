import React, { useState, useEffect, useContext } from 'react';
import {
  ActivityIndicator,
  AsyncStorage
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './authProvider';

import { Center } from './center';
import { AppTabs } from './appTabs';
import { AuthStack } from './authStack';

export const Routes = () => {
  const { user, login } = useContext(AuthContext);
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