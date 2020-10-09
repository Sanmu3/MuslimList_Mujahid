import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from '../style/introductionStyle';

export default class Introduction extends Component {
  render() {
    return (
      <View style={styles.background}>
        <Image style={styles.gambar} source={require('../logo/undraw.png')} />
        <Text style={styles.judul}> Mari List Target Antum </Text>
        <Text style={styles.judul2}>
          Merapikan Target Antum dengan aplikasi Muslim List
        </Text>
        <TouchableOpacity
          style={styles.tombol}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.title}>Get Started</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
