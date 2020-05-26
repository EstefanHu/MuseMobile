import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { CurrentContext } from '../providers/currentProvider.js';

import { Launch } from '../views/launch.js';
import { Empty } from '../views/empty.js';

const Stack = createStackNavigator();

export const PathStack = () => {
  const { current } = useContext(CurrentContext);

  return (
    <Stack.Navigator initialRouteName={current ? 'Launch' : 'Empty'}>
      <Stack.Screen
        options={{
          header: () => null
        }}
        name='Launch'
        component={Launch}
      />
      <Stack.Screen name='Empty' component={Empty} />
    </Stack.Navigator>
  );
};