import React, {Component} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../style/HomeStyle';
import {ScrollView} from 'react-native-gesture-handler';

export default class Home extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.background}>
            <View style={styles.pro}>
              <Image
                style={styles.pro1}
                source={require('../logo/profile.png')}
              />
              <Text style={styles.hi}>Hi Fulan,</Text>
              <Text style={styles.hi1}>How're you today? </Text>
            </View>

            <View style={styles.cari}>
              <Image
                style={styles.cari1}
                source={require('../logo/Search.png')}
              />
              <TextInput
                style={styles.cari2}
                placeholder="Search your target....."
              />
            </View>

            <Text style={styles.judul}>Your Target</Text>
            <View style={styles.vlist}>
              <Image style={styles.list} source={require('../logo/edit.png')} />
              <Text style={styles.tlist}>Membuat Aplikasi Muslim List</Text>
              <Image
                style={styles.clist}
                source={require('../logo/cheklis.png')}
              />
              <Image
                style={styles.dlist}
                source={require('../logo/delete.png')}
              />
            </View>
            <View style={styles.vlist}>
              <Image style={styles.list} source={require('../logo/edit.png')} />
              <Text style={styles.tlist}>Membuat Aplikasi Muslim List</Text>
              <Image
                style={styles.clist}
                source={require('../logo/cheklis.png')}
              />
              <Image
                style={styles.dlist}
                source={require('../logo/delete.png')}
              />
            </View>
            <View style={styles.vlist}>
              <Image style={styles.list} source={require('../logo/edit.png')} />
              <Text style={styles.tlist}>Membuat Aplikasi Muslim List</Text>
              <Image
                style={styles.clist}
                source={require('../logo/cheklis.png')}
              />
              <Image
                style={styles.dlist}
                source={require('../logo/delete.png')}
              />
            </View>
            <View style={styles.vlist}>
              <Image style={styles.list} source={require('../logo/edit.png')} />
              <Text style={styles.tlist}>Membuat Aplikasi Muslim List</Text>
              <Image
                style={styles.clist}
                source={require('../logo/cheklis.png')}
              />
              <Image
                style={styles.dlist}
                source={require('../logo/delete.png')}
              />
            </View>
            <View style={styles.vlist}>
              <Image style={styles.list} source={require('../logo/edit.png')} />
              <Text style={styles.tlist}>Membuat Aplikasi Muslim List</Text>
              <Image
                style={styles.clist}
                source={require('../logo/cheklis.png')}
              />
              <Image
                style={styles.dlist}
                source={require('../logo/delete.png')}
              />
            </View>
            <View style={styles.vlist}>
              <Image style={styles.list} source={require('../logo/edit.png')} />
              <Text style={styles.tlist}>Membuat Aplikasi Muslim List</Text>
              <Image
                style={styles.clist}
                source={require('../logo/cheklis.png')}
              />
              <Image
                style={styles.dlist}
                source={require('../logo/delete.png')}
              />
            </View>
            <View style={styles.vlist}>
              <Image style={styles.list} source={require('../logo/edit.png')} />
              <Text style={styles.tlist}>Membuat Aplikasi Muslim List</Text>
              <Image
                style={styles.clist}
                source={require('../logo/cheklis.png')}
              />
              <Image
                style={styles.dlist}
                source={require('../logo/delete.png')}
              />
            </View>
            <View style={styles.vlist}>
              <Image style={styles.list} source={require('../logo/edit.png')} />
              <Text style={styles.tlist}>Membuat Aplikasi Muslim List</Text>
              <Image
                style={styles.clist}
                source={require('../logo/cheklis.png')}
              />
              <Image
                style={styles.dlist}
                source={require('../logo/delete.png')}
              />
            </View>
            <View style={styles.vlist}>
              <Image style={styles.list} source={require('../logo/edit.png')} />
              <Text style={styles.tlist}>Membuat Aplikasi Muslim List</Text>
              <Image
                style={styles.clist}
                source={require('../logo/cheklis.png')}
              />
              <Image
                style={styles.dlist}
                source={require('../logo/delete.png')}
              />
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.float}
          onPress={() => alert('masih kosong')}>
          <Image source={require('../logo/plus.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}
