import React, { useContext } from 'react';
import {
  Text,
  Button
} from 'react-native';
import { AuthContext } from '../authProvider';
import { Center } from '../../components/center';

export const Login = ({navigation}) => {
  const { login } = useContext(AuthContext);

  return (
    <Center>
      <Text>Hello I am the Login screen</Text>
      <Button
        title='log me in'
        onPress={() => {
          login();
        }}
      />
      <Button
        title='go to Register'
        onPress={() => {
          navigation.navigate('Register');
        }}
      />
    </Center>
  )
}