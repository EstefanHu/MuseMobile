import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Profile } from '../views/profile';

const Stack = createStackNavigator();

export const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Profile' component={Profile} />
    </Stack.Navigator>
  );
};