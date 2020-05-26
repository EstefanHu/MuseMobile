import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../views/home';
import { Story } from '../views/story';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        options={{
          header: () => null
        }}
        component={Home}
        initialParams={{ genre: 'All' }}
      />
      <Stack.Screen
        name='Story'
        options={{
          title: 'hello'
        }}
        component={Story}
      />
    </Stack.Navigator>
  );
};