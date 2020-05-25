import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Launch } from '../views/launch.js';

const Stack = createStackNavigator();

export const PathStack = () => {
  retrun(
    <Stack.Navigator>
      <Stack.Screen name='launch' component={Launch} />
    </Stack.Navigator>
  );
};