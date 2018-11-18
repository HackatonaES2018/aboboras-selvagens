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
import {responsiveScalar} from "../util/ResponsiveUtility";
import StepIndicator from '../components/StepIndicator'

export default class LogradouroScreenç extends React.Component {
  static navigationOptions = {
    header: null,
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
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <StepIndicator currentPosition={1}/>


          <TextField label='CEP' onChangeText={this.change.bind(this)} keyboardType='number' keyboardType='number-pad'/>

          <View>
          {
            this.state.loading
                ?
                <ActivityIndicator style={{ alignSelf: 'center', marginLeft: 10, }} size="large" color='#002d72' />
                :
                <View>
                    {
                      this.state.carregado
                      ?
                            <View>
                                <TextField label='UF' value={this.state.dados.uf}/>
                                <TextField label='Cidade' value={this.state.dados.localidade}/>
                                <TextField label='Bairro' value={this.state.dados.bairro}/>
                                <TextField label='Logradouro' value={this.state.dados.logradouro}/>
                                <TextField label='Número' keyboardType='number' keyboardType='number-pad'/>
                                <TextField label='Complemento'/>

                                <View style={{paddingTop: responsiveScalar(6)}}>
                                  <Button onPress={() => this.props.navigation.navigate('Senha')}>
                                      Próximo
                                  </Button>
                                </View>
                            </View>

                      :
                        <View>
                            <Button onPress={() => this.confirmar()}>
                                Confirmar
                            </Button>
                        </View>
                    }
                </View>
          }
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
