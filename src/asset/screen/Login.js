import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {styles} from '../style/LoginStyle';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.background}>
        <Text style={styles.judul}> Welcome back! </Text>
        <Text style={styles.email}>Email</Text>
        <TextInput style={styles.iemail} placeholder="example@gmail.com" />
        <Text style={styles.password}>Password</Text>
        <TextInput
          style={styles.ipassword}
          placeholder="....."
          secureTextEntry={true}
        />
        <Image style={styles.eye} source={require('../logo/eye.png')} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}
          style={styles.login}>
          <Text style={styles.tlogin}>Log in</Text>
        </TouchableOpacity>
        <Text
          onPress={() => this.props.navigation.navigate('Forgot')}
          style={styles.tforpass}>
          Forget Password?
        </Text>
        <Text style={styles.or}>
          -------------------- Log in with social account --------------------
        </Text>
        <View style={styles.logo}>
          <Image style={styles.fb} source={require('../logo/facebook.png')} />
          <Image style={styles.google} source={require('../logo/google.png')} />
        </View>
        <View style={styles.signup}>
          <Text style={styles.s1}>Don't have an account?</Text>
          <Text
            onPress={() => this.props.navigation.navigate('Register')}
            style={styles.s2}>
            Sign Up
          </Text>
        </View>
      </View>
    );
  }
}
