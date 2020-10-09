import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  Picker,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {styles} from '../style/RegisterStyle';

export default class Register extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.background}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Image style={styles.panah} source={require('../logo/arrow.png')} />
          </TouchableOpacity>
          <Text style={styles.judul}>Registration</Text>

          <View style={styles.have}>
            <Text style={styles.have1}>Already have an account?</Text>
            <Text
              onPress={() => this.props.navigation.navigate('Login')}
              style={styles.have2}>
              Log In
            </Text>
          </View>

          <Text style={styles.email}>Email</Text>
          <TextInput style={styles.iemail} placeholder="example@gmail.com" />
          <Text style={styles.mnomer}>Mobile Number</Text>

          <View style={styles.un}>
            <View style={styles.sp}>
              <Image
                style={styles.sp1}
                source={require('../logo/indonesia.png')}
              />
              <Picker
                style={styles.piker}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }>
                <Picker.Item label="+62" value="Indonesia" />
                <Picker.Item label="+1" value="USA" />
              </Picker>
            </View>
            <TextInput style={styles.nomer} placeholder="  812345678910  " />
          </View>

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
            <Text>Sign Up</Text>
          </TouchableOpacity>
          <Text style={styles.or}>
            -------------------- Log in with social account --------------------
          </Text>
          <View style={styles.logo}>
            <Image style={styles.fb} source={require('../logo/facebook.png')} />
            <Image
              style={styles.google}
              source={require('../logo/google.png')}
            />
          </View>
          <Text
            style={{
              width: 355,
              textAlign: 'center',
              marginTop: 70,
              color: '#b0b0b0',
            }}>
            By clicking sign up you are agreeing to the
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: 355,
              justifyContent: 'center',
            }}>
            <Text style={{color: '#384dfe'}}>Term of use</Text>
            <Text style={{color: '#b0b0b0'}}> and the </Text>
            <Text style={{color: '#384dfe'}}>Privacy policy</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
