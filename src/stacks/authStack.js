import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Register } from '../views/register.js';
import { Login } from '../views/login.js';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name='Login'
        component={Login}
      />
      <Stack.Screen
        name='Register'
        component={Register}
      />
    </Stack.Navigator>
  );
};