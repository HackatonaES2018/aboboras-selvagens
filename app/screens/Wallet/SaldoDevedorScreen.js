import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialIcons, Foundation, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { responsiveScalar, responsiveHeight, responsiveWidth } from '../../util/ResponsiveUtility'
import HeaderWallet from '../../components/Wallet/HeaderWallet';
import Button from '../../components/Button'

export default class MainScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <HeaderWallet style={styles.balanceText}></HeaderWallet>
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 30, marginBottom: 10, fontFamily: 'lato-regular' }}>Pagar próxima parcela:</Text>
              <View style={{ marginTop: 10 }}>
                <Button>Gerar Boleto</Button>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }

  onPressUsarCredito = () => {
    const { navigate } = this.props.navigation;
    navigate('UsarCreditoScreen')
  }

}

const styles = StyleSheet.create({
  buttonsFooterText: {
    alignItems: 'center',
    textAlign: 'center',
    color: '#456300'
  },
  buttonsFooter: {
    color: '#84bd00',
    textAlign: 'center',
    alignItems: 'center'
  },
  container: {
    flex: responsiveScalar(4 / 5),
    backgroundColor: '#fbfbfb',
  },
  balanceText: {
    color: '#ff6060',
    fontSize: 35,
    fontFamily: 'lato-light'
  },
});
