import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Octicons,
  Fontisto,
  MaterialCommunityIcons,
  Ionicons
} from '@expo/vector-icons';
import { GenreContext } from '../contex.js';

import { HomeStack } from '../stacks/homeStack';
import { MapStack } from '../stacks/mapStack';
import { LibraryStack } from '../stacks/libraryStack';
import { ProfileStack } from '../stacks/profileStack';

const Tabs = createBottomTabNavigator();

export const AppTabs = () => {
  const [genre, setGenre] = useState('');

  return (
    <GenreContext.Provider value={{ genre, setGenre }}>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ _, color, size }) => {
            if (route.name === 'Home') {
              return <Octicons name={'home'} size={size} color={color} />;
            } else if (route.name === 'Map') {
              return <Fontisto name={'map'} size={size} color={color} />;
            } else if (route.name === 'Library') {
              return <MaterialCommunityIcons name={'library-shelves'} size={size} color={color} />
            } else if (route.name === 'Profile') {
              return <Ionicons name={'md-person'} size={size} color={color} />
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tabs.Screen name='Home' component={HomeStack} />
        <Tabs.Screen name='Map' component={MapStack} />
        <Tabs.Screen name='Library' component={LibraryStack} />
        <Tabs.Screen name='Profile' component={ProfileStack} />
      </Tabs.Navigator>
    </GenreContext.Provider>
  );
};