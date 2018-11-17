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

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline' }}>
                        <View style={{ flex: 1 }}>
                            <TextField tintColor='#002d72' keyboardType='number' keyboardType='number-pad' label='CPF' />
                        </View>


                        <TouchableOpacity style={{ marginTop: 10 }}>
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
