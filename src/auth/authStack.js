import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Register } from './views/register.js';
import { Login } from './views/login.js';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name='Login'
        options={{
          headerTitle: 'Sign in'
        }}
        component={Login}
      />
      <Stack.Screen
        name='Register'
        options={{
          headerTitle: 'Sign up'
        }}
        component={Register}
      />
    </Stack.Navigator>
  );
};