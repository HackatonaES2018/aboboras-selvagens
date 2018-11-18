import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Button from '../components/Button';
import StepIndicator from '../components/StepIndicator'


export default class SenhaScreen extends React.Component {
  static navigationOptions = {
    title: 'Dados de Acesso',
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
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <StepIndicator currentPosition={2} />

          <TextField label="Senha" secureTextEntry />
          <TextField label="Confirmar senha" secureTextEntry />

          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Button onPress={() => this.props.navigation.navigate('Renda')}>
              Próximo
          </Button>
          </View>
        </ScrollView>
      </View>
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
