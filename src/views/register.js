import React from 'react';
import {
  StyleSheet,
  Text,
  Button
} from 'react-native';
import { Center } from '../components/center';

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

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  }
});