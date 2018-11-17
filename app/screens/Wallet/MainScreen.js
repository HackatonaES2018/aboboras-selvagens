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
import { WebBrowser, LinearGradient } from 'expo';
import { MaterialIcons, Foundation, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { MonoText } from '../../components/StyledText';

export default class MainScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <LinearGradient
              colors={['#1e5799', '#3b5998', '#002d72']}
            >
            <View style={styles.balanceContainer}>
                <Text style={styles.walletTitle}>Carteira Portocred</Text>
                <Text style={styles.balanceText}>R$ 0,00</Text>
            </View>
          </LinearGradient>

          <View style={{
            flexDirection:'row',
            flex:1,
            justifyContent:'space-around',
            borderBottomColor:'#e4e4e4',
            borderBottomWidth:1,
            paddingBottom:10,
            paddingTop:10
            }}>
            <TouchableOpacity style={{flexDirection:'row'}}>
              <MaterialCommunityIcons color="green" name="credit-card-plus" size={32}></MaterialCommunityIcons>
              <Text style={{alignItems:'center', textAlignVertical: 'center'}}>Solicitar Crédito</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row'}}>
              <MaterialCommunityIcons color="red" name="bank-transfer-out" size={32}></MaterialCommunityIcons>
              <Text style={{alignItems:'center', textAlignVertical: 'center'}}>Transferir</Text>
            </TouchableOpacity>

          </View>

          <View style={{
            flexDirection:'row',
            flex:1,
            justifyContent:'space-around',
            borderBottomColor:'#e4e4e4',
            borderBottomWidth:1,
            paddingTop:10,
            paddingBottom:10
            }}>
            <Text>Limite de Crédito: R$ 2.000,00</Text>

          </View>

        </ScrollView>
      </View>
    );
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
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb'
  },
  historyContainer: {
    marginTop:20,
    marginBottom:10,
    borderTopColor:'#e4e4e4',
    borderTopWidth:1
  },
  walletTitle: {
    color:'#fff',
    fontSize: 21,
  },
  historyTitle: {
    color:'#002d72',
    fontSize: 21,
  },
  balanceText: {
    color:'#fff',
    fontSize: 30
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  balanceContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20
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
