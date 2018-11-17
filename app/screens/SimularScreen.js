import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
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
                    <TextField label='CPF' />
                </ScrollView>

                <Button>Confirmar</Button>
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
