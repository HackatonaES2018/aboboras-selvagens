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

export default class ConfirmarCadastroScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <TextField label='Nome' value="Vitor Edgar da Silva" />
          <TextField label='CPF' keyboardType='number' keyboardType='number-pad' value="87268582072" />
          <TextField label="Data de Nascimento" value="23/10/1997" />
          <TextField label="Tipo documento" value="CNH" />
          <TextField label="Número" value="06606570400" />
          <TextField label="Senha" secureTextEntry  />
          <TextField label="Confirmar senha" secureTextEntry />
          

          <View style={{paddingTop:30}}>
          <Button>
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
