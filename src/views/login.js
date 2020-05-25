import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import { AuthContext } from '../providers/authProvider';

export const Login = ({ navigation }) => {
  const { login } = useContext(AuthContext);

  const attemptLogin = () => {
    fetch('http://192.168.1.10:4000/mobile/test')
      .then(res => res.json())
      .then(console.log)
      .catch(console.error);
  }

  const developmentlogin = () => {
    fetch('http://192.168.1.10:4000/mobile/test')
      .then(res => res.json())
      .then(res => {
        if (res) login();
      })
      .catch(console.error);
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer} >
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Email"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          keyboardType="email-address"
          onSubmitEditing={() => console.log('testing')}
        />
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={attemptLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Button
          style={styles.button}
          title={'Auto Login'}
          onPress={developmentlogin}
        />
      </View>
      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Don't have an account yet?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.signupButton}> Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signupText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500'
  },
  formContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10
  },
  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }
});