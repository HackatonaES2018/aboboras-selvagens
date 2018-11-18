import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialIcons, Foundation, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { responsiveScalar, responsiveHeight, responsiveWidth } from '../../util/ResponsiveUtility'
import HeaderWallet from '../../components/Wallet/HeaderWallet';

export default class MainScreen extends React.Component {

  render() {
    return (
      <View style={{
        flex: 1
      }}>
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <HeaderWallet style={styles.balanceText}></HeaderWallet>

            <View style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-around',
              borderBottomColor: '#e4e4e4',
              borderBottomWidth: 1,
              paddingBottom: 10,
              paddingTop: 10
            }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('SolicitarCredito')} style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons color="#84bd00" name="credit-card-plus" style={{ marginRight: 10 }} size={32}></MaterialCommunityIcons>
                <Text style={{ alignItems: 'center', textAlignVertical: 'center', fontFamily: 'lato-regular' }}>Solicitar Crédito</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.onPressUsarCredito} style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons color="#84bd00" name="bank-transfer-out" size={32} style={{ marginRight: 10 }}></MaterialCommunityIcons>
                <Text style={{ alignItems: 'center', textAlignVertical: 'center', fontFamily: 'lato-regular' }}>Usar Crédito</Text>
              </TouchableOpacity>

            </View>

            <View style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-around',
              borderBottomColor: '#e4e4e4',
              borderBottomWidth: 1,
              paddingTop: 10,
              paddingBottom: 10
            }}>
              <Text style={{ fontFamily: 'lato-regular' }}>Limite de Crédito: R$ 2.000,00</Text>

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
  balanceText: {
    fontFamily: 'lato-light',
    color: '#fff',
    fontSize: 35
  },
  balanceText: {
    color:'#fff',
    fontSize: 30
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
  historyContainer: {
    marginTop: 20,
    marginBottom: 10,
    borderTopColor: '#e4e4e4',
    borderTopWidth: 1
  },
  walletTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '100'
  },
  historyTitle: {
    color: '#002d72',
    fontSize: 21,
  },
  balanceText: {
    color: '#fff',
    fontSize: 30
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
