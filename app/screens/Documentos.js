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
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { MaterialCommunityIcons } from '@expo/vector-icons'


var radio_props = [
    { label: 'CNH', value: 0 },
    { label: 'RG', value: 1 }
];

export default class Documentos extends React.Component {
    static navigationOptions = {
        header: null,
    };



    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <Text adjustsFontSizeToFit style={{ textAlignVertical: 'center', marginTop: 25, fontSize: 15, fontFamily: 'lato-regular', alignSelf: 'center', color: '#002d72', marginHorizontal: 10 }}>
                        Para presseguirmos, precisamos que
                    </Text>
                    <Text adjustsFontSizeToFit style={{ textAlignVertical: 'center', marginTop: 3, fontSize: 15, fontFamily: 'lato-regular', alignSelf: 'center', color: '#002d72', marginHorizontal: 10 }}>
                        você envie uma foto de um dos
                    </Text>
                    <Text adjustsFontSizeToFit style={{ textAlignVertical: 'center', marginTop: 3, fontSize: 15, fontFamily: 'lato-regular', alignSelf: 'center', color: '#002d72', marginHorizontal: 10 }}>
                        seguintes documentos.
                    </Text>

                    <View style={{ marginTop: 20 }}>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={(value) => { this.setState({ value: value }) }}
                        />
                    </View>

                    <View style={{ flex: 1, justifyContent: 'flex-start', marginTop: 20 }}>
                        <TouchableOpacity style={{ paddingVertical: 40, borderRadius: 10, borderWidth: 1, borderColor: '#cecece', alignItems: 'center' }}>
                            <MaterialCommunityIcons color="#d9d9db" name="camera" size={62} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'flex-end', marginBottom: 10 }}>
                        <Button>Enviar</Button>
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
        flex: 1
    },
});
