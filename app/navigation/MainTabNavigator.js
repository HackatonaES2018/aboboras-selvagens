import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SimularScreen from '../screens/SimularScreen';
import ConfirmarCadastro from '../screens/ConfirmarCadastro'

const LoginStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
  Simular: SimularScreen,
  ConfirmarCadastro: ConfirmarCadastro
}, {
    initialRouteName: 'ConfirmarCadastro'
  });



export default LoginStack;
