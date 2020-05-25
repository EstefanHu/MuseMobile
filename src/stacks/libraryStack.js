import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Library } from '../views/library';
import { Story } from '../views/story';

const Stack = createStackNavigator();

export const LibraryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Library'
        options={{
          header: () => null
        }}
        component={Library}
      />
      <Stack.Screen name='Story' component={Story} />
    </Stack.Navigator>
  );
};