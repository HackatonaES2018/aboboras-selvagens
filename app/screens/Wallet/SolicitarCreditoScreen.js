import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button,
    Slider,
    Picker
} from 'react-native';
import { MaterialIcons, Foundation, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import {responsiveScalar} from '../../util/ResponsiveUtility'
import HeaderWallet from "../../components/Wallet/HeaderWallet";
import { TextField } from 'react-native-material-textfield';


export default class SolicitarCreditoScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('' ,'Solicitar Crédito'),
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            value: 50,
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
            <ScrollView>
            <View style={styles.container}>
                    <View style={{width:200}}>
                        <TextField label='Valor' keyboardType='number' keyboardType='number-pad' />
                    </View>

                    <View style={styles.parcelasContainer}>
                        <Text style={{fontSize:20}}>Parcelas</Text>
                        <Picker
                            selectedValue={this.state.language}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                            <Picker.Item label="12 parcelas" value="12" />
                            <Picker.Item label="24 parcelas" value="24" />
                            <Picker.Item label="36 parcelas" value="36" />            
                        </Picker>
                    </View>
            </View>
            </ScrollView>
        );

    }
}

const styles = StyleSheet.create({
    container:{
        flex: responsiveScalar(1),
        padding: 30
    },

    parcelasContainer:{
        marginTop: responsiveScalar(10),
        flex: 1,
        justifyContent: 'center'
    }
});
