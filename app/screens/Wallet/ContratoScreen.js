import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { MaterialIcons, Foundation, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { responsiveScalar, responsiveHeight, responsiveWidth } from '../../util/ResponsiveUtility'
import Button from '../../components/Button';
import CreditoPessoalService from "../../services/CreditoPessoalService";

export default class ContratoScreen extends React.Component {
    static navigationOptions = {
        title: 'Contrato',
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

    constructor() {
        super();
        this.state = {
            contrato: null
        }
    }

    async componentWillMount() {
        const service = new CreditoPessoalService();
        const result = await service.condicoes();
        this.setState({ contrato: result })
    }

    onPressConfirmar() {
        const { navigate } = this.props.navigation;
        navigate('UsarCreditoScreen')
    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.containerScroll}>
                    <Text>{this.state.contrato}</Text>
                </ScrollView>
                <View style={styles.btn}>
                    <Button onPress={() => this.props.navigation.navigate('Wallet', { saldo: "872,00" })}>
                        Confirmar
                    </Button>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: responsiveScalar(1),
        backgroundColor: '#fbfbfb'
    },
    containerScroll: {
        marginTop: responsiveScalar(5),
        marginBottom: responsiveScalar(5),
        marginRight: responsiveScalar(3),
        marginLeft: responsiveScalar(3),
        backgroundColor: '#f5f5f5'
    },
    btn: {
        marginBottom: 20,
        padding: 10
    },
});
