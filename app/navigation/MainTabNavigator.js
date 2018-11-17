import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import InitialScreen from '../screens/InitialScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SimularScreen from '../screens/SimularScreen';
import ConfirmarCadastro from '../screens/ConfirmarCadastro'
import MainScreen from '../screens/Wallet/MainScreen';

const LoginStack = createStackNavigator({
  Wallet_MainScreen: MainScreen,
  Initial: InitialScreen,
  Login: LoginScreen,
  Register: RegisterScreen,
  Simular: SimularScreen,
  ConfirmarCadastro: ConfirmarCadastro
}, {
    initialRouteName: 'ConfirmarCadastro'
   });



export default LoginStack;
