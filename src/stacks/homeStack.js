import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../views/home';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        options={{
          // header: () => null
        }}
        component={Home}
      />
    </Stack.Navigator>
  );
};