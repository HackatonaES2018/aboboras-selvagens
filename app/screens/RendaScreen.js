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
    header: null,
  }; 


  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <StepIndicator currentPosition={3}/>

          <TextField label="Valor" keyboardType='number-pad' />
          
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Button onPress={() => this.props.navigation.navigate('Wallet_MainScreen')}>
            Finalizar Cadastro
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