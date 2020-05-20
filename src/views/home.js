import React, { useContext } from 'react';
import {
  Text,
  Button
} from 'react-native';
import { Center } from '../center.js';
import { AuthContext } from '../authProvider.js';

export const Home = () => {
  const { logout } = useContext(AuthContext);
  return (
    <Center>
      <Text>Home</Text>
      <Button title='Logout' onPress={() => logout()} />
    </Center>
  );
};