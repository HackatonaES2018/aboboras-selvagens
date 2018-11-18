import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import InitialScreen from '../screens/InitialScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SimularScreen from '../screens/SimularScreen';
import ConfirmarCadastroScreen from '../screens/ConfirmarCadastroScreen';
import MainScreen from '../screens/Wallet/MainScreen';
import RendaScreen from '../screens/RendaScreen';
import SenhaScreen from '../screens/SenhaScreen';
import UsarCreditoScreen from '../screens/Wallet/UsarCreditoScreen';
import LogradouroScreen from '../screens/LogradouroScreen';

const LoginStack = createStackNavigator({
  Logradouro: LogradouroScreen,
  Renda: RendaScreen, 
  Wallet_MainScreen: MainScreen,
  Initial: InitialScreen,
  Login: LoginScreen,
  Register: RegisterScreen,
  UsarCreditoScreen: UsarCreditoScreen,
  SimularScreen: SimularScreen,
  ConfirmarCadastroScreen: ConfirmarCadastroScreen,
  Senha: SenhaScreen
}, {
    initialRouteName: 'ConfirmarCadastroScreen'
  });

export default LoginStack;
