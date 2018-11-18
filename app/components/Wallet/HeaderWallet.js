import React from 'react';
import { LinearGradient } from 'expo';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HeaderWallet extends React.Component {
  render() {
    return (
      <LinearGradient
          colors={['#1e5799', '#3b5998', '#002d72']}
        >
        <View style={styles.balanceContainer}>
            <Text style={styles.walletTitle}>PortoWallet</Text>
            <Text style={this.props.style}>R$ 0,00</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  walletTitle: {
    color:'#fff',
    fontSize: 14,
    fontWeight:'100'
  },
  balanceText: {
    color:'#fff',
    fontSize: 30
  },
  balanceContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20
  },
});