import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Splash from './src/asset/screen/SpalshScreen';
import Introduction from './src/asset/screen/Introduction';
import Navi from './src/asset/screen/Navigasi';
export default class App extends Component {
  state = {
    splash: true,
  };
  ganti = () => {
    if (this.state.splash) {
      return <Splash />;
    } else {
      return <Navi />;
    }
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({splash: false});
    }, 0);
  }
  render() {
    return <>{this.ganti()}</>;
  }
}
