import React, { useContext } from 'react';
import {
  Text,
  Button
} from 'react-native';
import { Center } from '../components/center.js';
import { AuthContext } from '../auth/authProvider.js';

export const Home = () => {
  const { logout } = useContext(AuthContext);
  return (
    <Center>
      <Text>Home</Text>
      <Button title='Logout' onPress={() => logout()} />
    </Center>
  );
};