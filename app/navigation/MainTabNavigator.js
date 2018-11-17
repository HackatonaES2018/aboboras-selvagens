import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MainScreen from '../screens/Wallet/MainScreen';
import SolicitarCreditoScreen from "../screens/Wallet/SolicitarCreditoScreen";

const LoginStack = createStackNavigator({
  Wallet_MainScreen: MainScreen,
  Login: LoginScreen,
  Register: RegisterScreen,
  SolicitarCredito: SolicitarCreditoScreen
});



export default LoginStack;
