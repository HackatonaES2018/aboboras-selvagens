import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MainScreen from '../screens/Wallet/MainScreen';
import SolicitarCreditoScreen from "../screens/Wallet/SolicitarCreditoScreen";
import UsarCreditoScreen from '../screens/Wallet/UsarCreditoScreen';
import BilletCamera from '../screens/Wallet/BilletCamera';

const LoginStack = createStackNavigator({
  Wallet_MainScreen: MainScreen,
  Login: LoginScreen,
  Register: RegisterScreen,
  UsarCreditoScreen: UsarCreditoScreen,
  BilletCamera: BilletCamera,
  UsarCreditoScreen: UsarCreditoScreen
});



export default LoginStack;
