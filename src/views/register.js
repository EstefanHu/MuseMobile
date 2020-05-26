import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { AuthContext } from '../providers/authProvider';

export const Register = ({ navigation }) => {
  const { login } = useContext(AuthContext);

  const attemptRegisration = () => {
    fetch('http://192.168.1.10:4000/mobile/register')
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
          <Text style={styles.logo}>Join the Story</Text>
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="First Name"
            onSubmitEditing={() => console.log('testing')}
          />
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Last Name"
            onSubmitEditing={() => console.log('testing')}
          />
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
          <TextInput style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={attemptRegisration}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginTextCont}>
          <Text style={styles.loginText}>Already have an Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginButton}> Log in!</Text>
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
    fontWeight: 'bold',
    fontSize: 40
  },
  loginTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  loginText: {
    fontSize: 16
  },
  loginButton: {
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