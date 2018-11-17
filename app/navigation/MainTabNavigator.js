import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SimularScreen from '../screens/SimularScreen';
import MainScreen from '../screens/Wallet/MainScreen';

const LoginStack = createStackNavigator({
  Wallet_MainScreen: MainScreen,
  Login: LoginScreen,
  Register: RegisterScreen,
  Simular: SimularScreen
}, {
    initialRouteName: 'Simular'
  });



export default LoginStack;
