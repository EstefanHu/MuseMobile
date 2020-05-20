import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, Button } from 'react-native';
import { Center } from './center';
import { AuthContext } from './authProvider';
import {
  Octicons,
  Fontisto,
  MaterialCommunityIcons,
  Ionicons
} from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

function Home() {
  const { logout } = useContext(AuthContext);
  return (
    <Center>
      <Text>Home</Text>
      <Button title='Logout' onPress={() => logout()} />
    </Center>
  )
};

function Map() {
  return (
    <Center>
      <Text>Map</Text>
    </Center>
  )
}

function Library() {
  return (
    <Center>
      <Text>Library</Text>
    </Center>
  )
}

function Profile() {
  return (
    <Center>
      <Text>Profile</Text>
    </Center>
  )
}

export const AppTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ _, color, size }) => {
          let iconName;

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