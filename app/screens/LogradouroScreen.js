import React from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Button from '../components/Button';
import CepService from "../services/CepService";
import { responsiveScalar } from "../util/ResponsiveUtility";
import StepIndicator from '../components/StepIndicator'

export default class LogradouroScreenç extends React.Component {
  static navigationOptions = {
    title: 'Endereço',
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

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      loading: false,
      carregado: false,
      dados: null
    };
  }

  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value),
      };
    });
  }

  confirmar = async () => {
    const service = new CepService()
    this.setState({ loading: true })
    const dados = await service.buscarCep(this.state.value)
    console.warn(dados)
    this.setState({ carregado: true })

    this.setState({ loading: false, dados })

  }

  render() {
    return (
      <ScrollView style={styles.containerCenter} contentContainerStyle={styles.contentContainer}>
        <StepIndicator currentPosition={1} />

        <View style={{ marginHorizontal: 10 }}>

          <TextField label='CEP' onChangeText={this.change.bind(this)} keyboardType='number' keyboardType='number-pad' />

        </View>
        <View style={{ flex: 1, marginHorizontal: 10 }}>
          {
            this.state.loading
              ?
              <ActivityIndicator style={{ alignSelf: 'center', marginLeft: 10 }} size="large" color='#002d72' />
              :
              <View style={{ flex: 1 }}>
                {
                  this.state.carregado
                    ?
                    <View style={{ flex: 1 }}>
                      <TextField label='UF' value={this.state.dados.uf} />
                      <TextField label='Cidade' value={this.state.dados.localidade} />
                      <TextField label='Bairro' value={this.state.dados.bairro} />
                      <TextField label='Logradouro' value={this.state.dados.logradouro} />
                      <TextField label='Número' keyboardType='number' keyboardType='number-pad' />
                      <TextField label='Complemento' />
                      <View style={{ marginVertical: 20 }}>
                        <Button onPress={() => this.props.navigation.navigate('Senha')}>
                          Próximo
                      </Button>
                      </View>

                    </View>

                    :
                    <View style={{ flex: 1, justifyContent: 'flex-end', paddingVertical: 10 }} >
                      <Button onPress={() => this.confirmar()}>
                        Confirmar
                      </Button>

                    </View>

                }
              </View>
          }
        </View>

      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fbfbfb',
  },
  containerCenter: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fbfbfb',
  },
  contentContainer: {
    paddingTop: 30,
  },

});
