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
            <View style={styles.container}>
                <View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}> Solicitar Crédito </Text>
                    </View>
                    <View style={styles.sliderContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.valorText}> Valor </Text>
                        </View>
                        <Slider
                            step={10}
                            maximumValue={20000}
                            onValueChange={this.change.bind(this)}
                            value={this.state.value}
                        />
                        <Text>{this.state.value}</Text>
                    </View>
                    <View style={styles.parcelasContainer}>
                        <Text>Parcelas</Text>
                        <Picker
                            selectedValue={this.state.language}
                            style={{ height: 50, width: 100 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                            <Picker.Item label="12 parcelas" value="12" />
                            <Picker.Item label="24 parcelas" value="24" />
                            <Picker.Item label="36 parcelas" value="36" />            
                        </Picker>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fbfbfb',
        flex: responsiveScalar(1)
    },
    title:{
        fontSize: responsiveScalar(5)
    },
    titleContainer:{
        alignItems: 'center'
    },
    valorText:{
        alignItems: 'center',
        fontSize: responsiveScalar(3)
    },
    sliderContainer:{
        marginTop: responsiveScalar(10)
    },
    parcelasContainer:{
        marginTop: responsiveScalar(10),
        flexDirection: 'row',
        justifyContent: 'center'
    }
});
