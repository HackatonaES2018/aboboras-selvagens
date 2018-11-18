import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Button from '../components/Button';
import StepIndicator from '../components/StepIndicator'


export default class RendaScreen extends React.Component {
  static navigationOptions = {
    title: 'Renda',
    headerStyle: {
      marginTop: -24,
      shadowOpacity: 0,
      shadowOffset: {
        height: 0
      },
      shadowRadius: 0,
      borderBottomWidth: 0,
      elevation: 0,
      backgroundColor: '#fbfbfb',
    },
    headerTintColor: '#002d72',
    headerTitleStyle: {
      flex: 1,
      alignSelf: 'center',
      textAlign: 'center',
      fontWeight: '200',
      fontFamily: 'lato-bold'
    },
    headerRight: (<View />)
  };


  render() {
    return (
      <View style={styles.container}>
        <StepIndicator currentPosition={3} />
        <View style={{ marginHorizontal: 10, flex: 1 }}>
          <TextField label="Renda mensal" keyboardType='number-pad' />

          <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 10 }}>
            <Button onPress={() => this.props.navigation.navigate('Wallet')}>
              Finalizar Cadastro
          </Button>
          </View>
        </View>
      </View >
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fbfbfb',
  },
  contentContainer: {
    paddingTop: 30,
    flex: 1
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