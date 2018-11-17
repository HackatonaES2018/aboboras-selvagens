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

    confirmar = async () => {
        const res = new CreditoPessoalService()
        const gres = await res.simulacao()
        console.warn(gres)

    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <View style={{ flex: 1 }}>
                            <TextField tintColor='#002d72' keyboardType='number' keyboardType='number-pad' label='CPF' />
                        </View>


                        <TouchableOpacity onPress={this.confirmar} style={{ marginTop: 10 }}>
                            <Text style={{ marginLeft: 30, textAlign: 'center', fontSize: 18, fontFamily: 'lato-regular', color: '#002d72' }}>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
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
    },
});
