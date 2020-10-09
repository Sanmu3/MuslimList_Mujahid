import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Introduction from './Introduction';
import Login from './Login';
import Forgot from './ForgotPass';
import Register from './Register';
import Home from './Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dawer from './Drawer';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const bebas = () => {
  return (
    <Drawer.Navigator drawerContent={() => <Dawer />}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

const Navi = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Introduction"
          component={Introduction}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Forgot"
          component={Forgot}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={bebas}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navi;
