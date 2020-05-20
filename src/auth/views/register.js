import React from 'react';
import {
  Text,
  Button
} from 'react-native';
import { Center } from '../../components/center';

export const Register = ({navigation}) => {
  return (
    <Center>
      <Text>I am the Register screen</Text>
      <Button
        title='go to Login'
        onPress={() => {
          navigation.navigate('Login');
          // navigation.goBack();
        }}
      />
    </Center>
  )
}