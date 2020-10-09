import React, {Component} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../style/ForgotPassStyle';

export default class Forgot extends Component {
  render() {
    return (
      <View style={styles.background}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}>
          <Image style={styles.panah} source={require('../logo/arrow.png')} />
        </TouchableOpacity>
        <Text style={styles.judul}> Reset Password </Text>
        <Text style={styles.t}>
          Please enter your email below to recieve your {'\n'}Password reset
          instructions.
        </Text>
        <Text style={styles.email}>Email</Text>
        <TextInput style={styles.iemail} placeholder="example@gmail.com" />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}
          style={styles.login}>
          <Text style={styles.tlogin}>Send Email</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
