import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator
} from 'react-native';


import { TextField } from 'react-native-material-textfield';
import Button from '../components/Button';
import CreditoPessoalService from '../services/CreditoPessoalService'

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    state = {
        loading: false,
        dados: null
    }

    confirmar = async () => {
        const service = new CreditoPessoalService()
        this.setState({ loading: true })
        const dados = await service.simulacao()
        console.warn(dados)

        this.setState({ loading: false, dados })
        console.warn(dados)

    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <View style={{ flex: 4 }}>
                            <TextField autoFocus tintColor='#002d72' keyboardType='number' keyboardType='number-pad' label='CPF' />
                        </View>

                        <View style={{ flex: 3 }}>
                            {
                                this.state.loading
                                    ?
                                    <ActivityIndicator style={{ alignSelf: 'center', marginLeft: 10, }} size="large" color='#002d72' />
                                    :
                                    <TouchableOpacity onPress={this.confirmar} style={{ marginTop: 10 }}>
                                        <Text style={{ marginLeft: 10, textAlign: 'center', fontSize: 18, fontFamily: 'lato-regular', color: '#002d72' }}>Confirmar</Text>
                                    </TouchableOpacity>
                            }
                        </View>
                    </View>

                    {
                        !this.state.loading
                        &&
                        Boolean(this.state.dados)
                        &&
                        <View style={{ flex: 1 }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>

                                <Text style={{ marginTop: 10, fontSize: 20, fontFamily: 'lato-regular', color: '#002d72', alignSelf: 'center', marginHorizontal: 50 }}>
                                    Limite pré-aprovado de:
                            </Text>
                                <Text style={{ marginTop: 15, fontSize: 35, fontFamily: 'lato-regular', color: '#84bd00', alignSelf: 'center', marginHorizontal: 50 }}>
                                    {`R$ ${this.state.dados['cet']['valor-total']}`}
                                </Text>

                                <Text style={{ marginTop: 25, fontSize: 14, fontFamily: 'lato-regular', alignSelf: 'center', color: '#002d72', marginHorizontal: 30 }}>
                                    Realize o cadastro para retirar o crédito ou
                                </Text>
                                <Text style={{ marginTop: 5, fontSize: 14, fontFamily: 'lato-regular', alignSelf: 'center', color: '#002d72', marginHorizontal: 30 }}>
                                    solicitar uma nova proposta.
                                </Text>


                            </View>
                            <View style={{}}>
                                <Button onPress={() => this.props.navigation.navigate('ConfirmarCadastroScreen')}>Cadastre-se</Button>
                            </View>
                        </View>

                    }


                </ScrollView>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 30,
        flex: 1
    },
});
