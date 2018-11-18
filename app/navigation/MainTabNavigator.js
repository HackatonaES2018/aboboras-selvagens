import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { MaterialIcons, Foundation, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'

import TabBarIcon from '../components/TabBarIcon';


import InitialScreen from '../screens/InitialScreen';
import LoginScreen from '../screens/LoginScreen';
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
import SaldoDevedorScreen from '../screens/Wallet/SaldoDevedorScreen'
import ContratoScreen from '../screens/Wallet/ContratoScreen'



const TabNavigation = createBottomTabNavigator({
  Wallet: MainScreen,
  SaldoDevedorScreen: SaldoDevedorScreen,
  Historico: MainScreen
},
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {


        console.warn(focused)
        console.warn(routeName)
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Wallet': iconName = 'wallet'; break;
          case 'SaldoDevedorScreen': iconName = 'chart-bar'; break;
          case 'Historico': iconName = 'history'; break;
          default: iconName = 'wallet';
        }
        let color = "#ccc"
        if (focused) color = "#002d72"
        return <MaterialCommunityIcons color={color} name={iconName} style={{ marginRight: 10 }} size={32} />;
      },
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#84bd00',
      inactiveTintColor: '#fff',
      style: {
        backgroundColor: '#fff',
      },
    },
  });

TabNavigation.navigationOptions = ({ navigation }) => {
  const { routes, index } = navigation.state;
  const navigationOptions = { header: null };


  return navigationOptions;
};

const LoginStack = createStackNavigator({
  Logradouro: LogradouroScreen,
  Renda: RendaScreen,
  Wallet: TabNavigation,
  Initial: InitialScreen,
  Login: LoginScreen,
  SolicitarCredito: SolicitarCreditoScreen,
  UsarCreditoScreen: UsarCreditoScreen,
  BilletCamera: BilletCamera,
  SimularScreen: SimularScreen,
  ConfirmarCadastroScreen: ConfirmarCadastroScreen,
  Documentos: Documentos,
  Senha: SenhaScreen,
  SaldoDevedorScreen: SaldoDevedorScreen,
  Contrato: ContratoScreen,
  Senha: SenhaScreen
}, {
    initialRouteName: 'Wallet',
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
