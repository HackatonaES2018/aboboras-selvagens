import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Camera, Permissions } from 'expo';
import { MaterialIcons, Foundation, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { responsiveScalar, responsiveHeight, responsiveWidth } from '../../util/ResponsiveUtility'
import HeaderWallet from '../../components/Wallet/HeaderWallet';

export default class UsarCreditoScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  static navigationOptions = {
    header: null,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const saldo = this.props.navigation.getParam('saldo', "0,00")
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <HeaderWallet style={styles.balanceText} saldo={saldo}></HeaderWallet>

            <View style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-around',
              borderBottomColor: '#e4e4e4',
              borderBottomWidth: 1,
              paddingTop: 10,
              paddingBottom: 10
            }}>
              <Text>Usar Crédito</Text>
            </View>

            <View style={
              {
                padding: 30
              }
            }>
              <TouchableOpacity onPress={this.onPressPagarBoleto} style={styles.buttons}>
                <MaterialCommunityIcons style={{ marginRight: 10, color: '#002d72' }} name="barcode-scan" size={48}></MaterialCommunityIcons>
                <Text style={{ alignItems: 'center', textAlignVertical: 'center' }}>Pagar Boleto</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttons}>
                <MaterialCommunityIcons style={{ marginRight: 10, color: '#002d72' }} name="wallet" size={48}></MaterialCommunityIcons>
                <Text style={{ alignItems: 'center', textAlignVertical: 'center' }}>Outra Carteira Digital</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttons}>
                <MaterialCommunityIcons style={{ marginRight: 10, color: '#002d72' }} name="bank" size={48}></MaterialCommunityIcons>
                <Text style={{ alignItems: 'center', textAlignVertical: 'center' }}>Conta-Corrente</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>

    );
  }

  onPressUsarCredito = () => {

  }

  onPressPagarBoleto = () => {
    const { navigate } = this.props.navigation;
    navigate('BilletCamera')
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    marginBottom: 20
  },
  balanceText: {
    fontFamily: 'lato-light',
    color: '#fff',
    fontSize: 35
  },
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
    backgroundColor: '#fbfbfb'
  },

});
