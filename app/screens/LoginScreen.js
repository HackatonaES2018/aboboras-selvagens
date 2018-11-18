import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Button from '../components/Button';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/portocred-azul.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />

          </View>

          <TextField label='CPF' keyboardType='number' keyboardType='number-pad' />
          <TextField label='Senha' secureTextEntry />
          <Text style={{ textAlign: 'right', color: '#8d8f8a' }}>Esqueceu sua senha?</Text>

          <View style={{ paddingTop: 30 }}>
            <Button onPress={this.navigateWallet}>
              Entrar
          </Button>
          </View>
        </ScrollView>
      </View>
    );
  }

  navigateWallet = () => {
    const { navigate } = this.props.navigation;
    navigate('Wallet')
  };


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fbfbfb'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  welcomeImage: {
    width: 320,
    height: 200,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: 0,
  },

});
