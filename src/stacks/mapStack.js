import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Story } from '../views/story';
import { MapView } from '../views/mapView';

const Stack = createStackNavigator();

export const MapStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Map'
        options={{
          header: () => null
        }}
        component={MapView}
      />
      <Stack.Screen name='Story' component={Story} />
    </Stack.Navigator>
  )
}