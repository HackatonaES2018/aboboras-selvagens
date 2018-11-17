import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import InitialScreen from '../screens/InitialScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SimularScreen from '../screens/SimularScreen';
import MainScreen from '../screens/Wallet/MainScreen';
import UsarCreditoScreen from '../screens/Wallet/UsarCreditoScreen';

const LoginStack = createStackNavigator({
  Wallet_MainScreen: MainScreen,
  Initial: InitialScreen,
  Login: LoginScreen,
  Register: RegisterScreen,
  UsarCreditoScreen: UsarCreditoScreen
});



export default LoginStack;
