import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, Button } from 'react-native';
import { Center } from './center';
import {
  Octicons,
  Fontisto,
  MaterialCommunityIcons,
  Ionicons
} from '@expo/vector-icons';
import { Home } from './views/home.js';
import { Map } from './views/map.js';
import { Library } from './views/library.js';
import { Profile } from './views/profile.js';

const Tabs = createBottomTabNavigator();

export const AppTabs = () => {
  return (
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
      <Tabs.Screen name='Home' component={Home} />
      <Tabs.Screen name='Map' component={Map} />
      <Tabs.Screen name='Library' component={Library} />
      <Tabs.Screen name='Profile' component={Profile} />
    </Tabs.Navigator>
  );
};