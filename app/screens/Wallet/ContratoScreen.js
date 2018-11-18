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
        header: null,
    };
        constructor(){
            super();
            this.state = {
                contrato:null
            }
        }

        async componentWillMount(){
            const service = new CreditoPessoalService();
            const result = await service.condicoes();
            this.setState({ contrato: result })
        }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.containerScroll}>
                    <Text>{this.state.contrato}</Text>
                </ScrollView>
                <View style={styles.btn}>
                    <Button onPress={() => this.props.navigation.navigate('MainScreenMais')}>
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
        marginTop:responsiveScalar(10),
        marginBottom:responsiveScalar(5),
        marginRight:responsiveScalar(3),
        marginLeft:responsiveScalar(3),
        backgroundColor: '#f5f5f5'
    },
    btn: {
        marginBottom: responsiveScalar(2),
        padding: 10
    },
});
