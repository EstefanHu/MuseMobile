import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../views/home';
import { Story } from '../views/story';

import { GenreSetter } from '../components/genreSetter';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false}}
    >
      <Stack.Screen
        name='Home'
        component={Home}
        initialParams={{ genre: 'All' }}
      />
      <Stack.Screen
        name='Story'
        component={Story}
      />
    </Stack.Navigator>
  );
};