import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator,
    Dimensions
} from 'react-native';


import { TextField } from 'react-native-material-textfield';
import Button from '../components/Button';
import CreditoPessoalService from '../services/CreditoPessoalService'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Camera, Permissions } from 'expo';


let deviceWidth = Dimensions.get('window').width


var radio_props = [
    { label: 'CNH', value: 0 },
    { label: 'RG', value: 1 }
];

export default class Documentos extends React.Component {
    static navigationOptions = {
        title: 'Documentos',
        headerStyle: {
            marginTop: -24,
            shadowOpacity: 0,
            shadowOffset: {
                height: 0
            },
            shadowRadius: 0,
            borderBottomWidth: 0,
            elevation: 0,
            backgroundColor: '#fff',
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


    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
        camera: false
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    snap = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            this.setState({ first: photo, camera: false })
            console.warn(photo)
        }
    };

    render() {
        return (

            <View style={styles.container}>
                {this.state.camera
                    ?
                    <View style={{ flex: 1 }}>
                        <Camera style={{ flex: 1, marginTop: 24 }} type={this.state.type} ref={ref => { this.camera = ref; }}>
                            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                <TouchableOpacity onPress={() => this.snap()} style={{ alignSelf: 'center', padding: 18, backgroundColor: '#d9d9db', borderRadius: 60, alignItems: 'center', marginBottom: 15, borderWidth: 1, borderColor: '#1c1c1c' }}>
                                    <MaterialCommunityIcons color="#1c1c1c" name="camera" size={35} />
                                </TouchableOpacity>
                            </View>
                        </Camera>
                    </View>
                    :
                    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                        <Text adjustsFontSizeToFit style={{ textAlignVertical: 'center', marginTop: 5, fontSize: 15, fontFamily: 'lato-regular', alignSelf: 'center', color: '#002d72', marginHorizontal: 5 }}>
                            Para presseguirmos, precisamos que você
                    </Text>
                        <Text adjustsFontSizeToFit style={{ textAlignVertical: 'center', marginTop: 3, fontSize: 15, fontFamily: 'lato-regular', alignSelf: 'center', color: '#002d72', marginHorizontal: 5 }}>
                            envie uma foto de um dos seguintes
                    </Text>
                        <Text adjustsFontSizeToFit style={{ textAlignVertical: 'center', marginTop: 3, fontSize: 15, fontFamily: 'lato-regular', alignSelf: 'center', color: '#002d72', marginHorizontal: 5 }}>
                            documentos.
                    </Text>

                        <View style={{ marginTop: 30 }}>
                            <RadioForm
                                radio_props={radio_props}
                                initial={0}
                                onPress={(value) => { this.setState({ value: value }) }}
                            />
                        </View>

                        <View style={{ flex: 1, justifyContent: 'flex-start', marginTop: 20 }}>
                            <TouchableOpacity onPress={() => this.setState({ camera: true })} style={{ paddingVertical: 40, borderRadius: 10, borderWidth: 1, borderColor: '#cecece', alignItems: 'center', height: 150, justifyContent: 'center' }}>
                                {
                                    this.state.first
                                        ?
                                        <Image source={{ uri: this.state.first.uri }} style={{ width: 150, height: deviceWidth / 1.06, borderWidth: 1, borderRadius: 10, transform: [{ rotate: '270deg' }] }} />
                                        :
                                        <MaterialCommunityIcons color="#d9d9db" name="camera" size={62} />


                                }
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'flex-end', marginBottom: 30 }}>
                            <Button onPress={() => this.props.navigation.navigate('ConfirmarCadastroScreen')}>Enviar</Button>
                        </View>
                    </ScrollView>

                }



            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        padding: 10,
        paddingTop: 30,
        flex: 1
    },
});
