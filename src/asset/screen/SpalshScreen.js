import React, {Component} from 'react';
import {Text, View, Image, ActivityIndicator} from 'react-native';
import {styles} from '../style/splashStyle';

class Spalsh extends Component {
  render() {
    return (
      <View style={styles.background}>
        <Image
          style={styles.gambar}
          source={require('../logo/shopping-list1.png')}
        />
        <Text style={styles.judul}> Muslim Text </Text>
        <ActivityIndicator size="large" color="#fff" style={styles.muter} />
      </View>
    );
  }
}
export default Spalsh;
