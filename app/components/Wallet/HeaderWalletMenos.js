import React from 'react';
import { LinearGradient } from 'expo';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HeaderWalletMais extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={['#002d72', '#002d72', '#002d72']}
      >
        <View style={styles.balanceContainer}>
            <Text style={styles.walletTitle}>PortoWallet</Text>
            <Text style={this.props.style}>R$ 796,51</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  walletTitle: {
    fontFamily: 'lato-regular',
    color: '#fff',
    fontSize: 14,
    fontWeight: '100',
    marginBottom: 10
  },
  balanceText: {
    fontFamily: 'lato-light',
    color: '#fff',
    fontSize: 35
  },
  balanceContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20
  },
});
