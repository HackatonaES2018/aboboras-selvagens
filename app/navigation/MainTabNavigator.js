import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import InitialScreen from '../screens/InitialScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SimularScreen from '../screens/SimularScreen';

const LoginStack = createStackNavigator({
  Initial: InitialScreen,
  Login: LoginScreen,
  Register: RegisterScreen,
  Simular: SimularScreen
}, {
    initialRouteName: 'Initial'
  });



export default LoginStack;
