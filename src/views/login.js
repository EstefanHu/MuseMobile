import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  Keyboard,
  TouchableWithoutFeedback
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.formContainer} >
          <Text style={styles.logo}>:Muse</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Email Address"
            keyboardType="email-address"
            onSubmitEditing={() => console.log('testing')}
          />
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Password"
            secureTextEntry={true}
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
            <Text style={styles.signupButton}> Sign up!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    fontSize: 80,
    fontWeight: 'bold',
    // color: 'rgb(255,50,50)'
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signupText: {
    fontSize: 16
  },
  signupButton: {
    color: '#a8a8a8',
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
    backgroundColor: '#ebebeb',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 13,
    fontSize: 16,
    marginVertical: 10
  },
  button: {
    width: 300,
    backgroundColor: 'rgb(255, 50, 50)',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center'
  }
});