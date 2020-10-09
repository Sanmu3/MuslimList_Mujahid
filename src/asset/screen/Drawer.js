import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from '../style/DrawerStyle';

const Dawer = () => {
  return (
    <View style={styles.background}>
      <Image style={styles.gambar} source={require('../logo/profile.png')} />
      <Text style={styles.nama}>Muhammad Mujahid Muslim</Text>
      <Text style={styles.username}>@Sanmu3</Text>
      <View style={styles.foll}>
        <Text style={styles.foll1}>202</Text>
        <Text style={styles.foll2}>Followers</Text>
        <Text style={styles.foll1}>202</Text>
        <Text style={styles.foll2}>Following</Text>
      </View>

      <View style={styles.pop}>
        <Image style={styles.star} source={require('../logo/star.png')} />
        <Text style={styles.tstar}>Popular</Text>
      </View>

      <View style={styles.bm}>
        <Image style={styles.bm1} source={require('../logo/bokmak.png')} />
        <Text style={styles.bm2}>Bookmarks</Text>
      </View>
    </View>
  );
};
export default Dawer;
