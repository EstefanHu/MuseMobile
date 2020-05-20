import React, { useContext } from 'react';
import {
  Text,
  Button
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Center } from '../components/center';
import { AuthContext } from './authProvider';


const Stack = createStackNavigator();

function Login({ navigation }) {
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

function Register({ navigation }) {
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

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
    >
      <Stack.Screen
        name='Login'
        options={{
          headerTitle: 'Sign in'
        }}
        component={Login}
      />
      <Stack.Screen
        name='Register'
        options={{
          headerTitle: 'Sign up'
        }}
        component={Register}
      />
    </Stack.Navigator>
  );
};