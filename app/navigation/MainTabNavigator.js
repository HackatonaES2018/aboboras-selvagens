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
import MainScreenMais from '../screens/Wallet/MainScreenMais'
import MainScreenMenos from '../screens/Wallet/MainScreenMenos'



const TabNavigation = createBottomTabNavigator({
  Wallet: MainScreen,
},
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home': iconName = 'ios-home'; break;
          case 'Adiciona': iconName = 'md-add'; break;
          case 'Perfil': iconName = 'ios-person'; break;
          default: iconName = 'ios-home';
        }

        return <MaterialCommunityIcons color="#84bd00" name="credit-card-plus" style={{ marginRight: 10 }} size={32} />;
      },
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#000',
      inactiveTintColor: '#000',
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
  MainScreenMais: MainScreenMais,
  MainScreenMenos: MainScreenMenos,
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
