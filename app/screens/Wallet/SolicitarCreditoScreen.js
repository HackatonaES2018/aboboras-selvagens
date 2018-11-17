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
    Slider
} from 'react-native';
import { MaterialIcons, Foundation, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import {responsiveScalar} from '../../util/ResponsiveUtility'


export default class SolicitarCreditoScreen extends React.Component {
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
                        <Slider
                            step={1}
                            maximumValue={100}
                            onValueChange={this.change.bind(this)}
                            value={this.state.value}
                        />
                        <Text>{this.state.value}</Text>
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
    sliderContainer:{
        marginTop: responsiveScalar(10)
    }
});
