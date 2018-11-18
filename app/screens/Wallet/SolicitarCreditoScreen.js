import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Slider,
    Picker
} from 'react-native';
import { MaterialIcons, Foundation, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { responsiveScalar } from '../../util/ResponsiveUtility'
import HeaderWallet from "../../components/Wallet/HeaderWallet";
import { TextField } from 'react-native-material-textfield';
import DatePickerComponent from '../../components/DatePickerComponent'
import Button from '../../components/Button'

export default class SolicitarCreditoScreen extends React.Component {
    static navigationOptions = {
        title: 'Solicitar Crédito',
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
            value: 50,
            date: ''
        };
    }

    change(value) {
        this.setState(() => {
            return {
                value: parseFloat(value),
            };
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer} contentContainerStyle={styles.contentContainer}>
                    <View style={{ width: 200 }}>
                        <TextField label='Valor (R$)' keyboardType='number' keyboardType='number-pad' />
                    </View>

                    <View style={styles.parcelasContainer}>
                        <Text style={{ fontFamily: 'lato-regular', fontSize: 18 }}>Parcelas:</Text>
                        <Picker
                            selectedValue={this.state.language}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                            <Picker.Item label="12 parcelas" value="12" />
                            <Picker.Item label="24 parcelas" value="24" />
                            <Picker.Item label="36 parcelas" value="36" />
                        </Picker>
                    </View>

                    <View style={{ paddingTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'lato-regular', fontSize: 18 }}>Primeira parcela:</Text>
                        <DatePickerComponent showIcon={false} />
                    </View>
                    <View style={{ marginTop: responsiveScalar(30) }}>
                        <Button onPress={() => this.props.navigation.navigate('Contrato')}>
                            Próximo
                     </Button>
                    </View>


                </View>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fbfbfb'
    },
    contentContainer: {
        paddingTop: 30,
        flex: 1
    },
    parcelasContainer: {
        marginTop: responsiveScalar(5),
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});
