import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import InitialScreen from '../screens/InitialScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SimularScreen from '../screens/SimularScreen';
import ConfirmarCadastroScreen from '../screens/ConfirmarCadastroScreen';
import MainScreen from '../screens/Wallet/MainScreen';
import SolicitarCreditoScreen from "../screens/Wallet/SolicitarCreditoScreen";
import BilletCamera from '../screens/Wallet/BilletCamera';
import RendaScreen from '../screens/RendaScreen';
import SenhaScreen from '../screens/SenhaScreen';
import UsarCreditoScreen from '../screens/Wallet/UsarCreditoScreen';
import Documentos from '../screens/Documentos';
import LogradouroScreen from '../screens/LogradouroScreen';

const LoginStack = createStackNavigator({
  Logradouro: LogradouroScreen,
  Renda: RendaScreen,
  Wallet_MainScreen: MainScreen,
  Initial: InitialScreen,
  Login: LoginScreen,
  Register: RegisterScreen,
  SolicitarCredito: SolicitarCreditoScreen,
  UsarCreditoScreen: UsarCreditoScreen,
  BilletCamera: BilletCamera,
  SimularScreen: SimularScreen,
  ConfirmarCadastroScreen: ConfirmarCadastroScreen,
  Documentos: Documentos,
  Senha: SenhaScreen
}, {
    initialRouteName: 'Initial',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  });


export default LoginStack;
