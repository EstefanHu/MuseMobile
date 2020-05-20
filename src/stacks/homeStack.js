import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../views/home';
import { Story } from '../views/story';

import { GenreSetter } from '../components/genreSetter';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        options={{
          header: () => <GenreSetter />
        }}
        component={Home}
      />
      <Stack.Screen
        name='Story'
        component={Story}
      />
    </Stack.Navigator>
  );
};