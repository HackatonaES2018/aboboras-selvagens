import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import InitialScreen from '../screens/InitialScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SimularScreen from '../screens/SimularScreen';
import ConfirmarCadastroScreen from '../screens/ConfirmarCadastroScreen'
import MainScreen from '../screens/Wallet/MainScreen';
import SenhaScreen from '../screens/SenhaScreen'
import UsarCreditoScreen from '../screens/Wallet/UsarCreditoScreen';
import Documentos from '../screens/Documentos';

const LoginStack = createStackNavigator({
  Wallet_MainScreen: MainScreen,
  Initial: InitialScreen,
  Login: LoginScreen,
  Register: RegisterScreen,
  UsarCreditoScreen: UsarCreditoScreen,
  SimularScreen: SimularScreen,
  ConfirmarCadastroScreen: ConfirmarCadastroScreen,
  Documentos: Documentos
}, {
    initialRouteName: 'Documentos'
  });




export default LoginStack;
