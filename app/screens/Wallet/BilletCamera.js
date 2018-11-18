import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import { Camera, Permissions } from 'expo';
import { MaterialIcons, Foundation, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { responsiveScalar, responsiveHeight, responsiveWidth } from '../../util/ResponsiveUtility'
import HeaderWallet from '../../components/Wallet/HeaderWallet';

export default class BilletCamera extends React.Component {
  state = {
    billetReaded: false,
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  onBilletBarcodeReaded = (boleto) => {

    if(!this.state.billetReaded) {
      let amount = this.getBilletAmount(boleto.data);
      this.billetPayConfirm(amount);
    }

    this.state.billetReaded = true;
  }

  getBilletAmount = (barcode) => {
    return (barcode.substr(9, 10) / 100.0).toFixed(2);
  };

  billetPayConfirm = (value) => {
    if(value > 0) {
      Alert.alert(
        'Você deseja pagar este boleto?',
        'Você confirma o pagamento deste boleto no valor de ' + value,
        [
          {text: 'Cancelar Pagamento', onPress: this.billetPaymentCancelled, style: 'cancel'},
          {text: 'Pagar', onPress: this.billetPaymentSuccess},
        ],
        { cancelable: false }
      )
    }
  }

  billetPaymentCancelled = () => {
    console.warn('Pagameto do boleto cancelado.');
    const {navigate} = this.props.navigation;
    navigate('UsarCreditoScreen')
  }

  billetPaymentSuccess = (value) => {
    Alert.alert(
      'Boleto foi pago!',
      'Boleto pago com sucesso',
      [
        {text: 'Ok', onPress: () => {
          const {navigate} = this.props.navigation;
          navigate('MainScreenMenos')
        }},
      ],
      { cancelable: false }
    )

  }

  render() {
    return (
      <View style={{flex:1}}>
          <Camera onBarCodeRead={this.onBilletBarcodeReaded} style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection:'row',
    marginBottom:20
  },
  buttonsFooterText: {
    alignItems:'center',
    textAlign: 'center',
    color:'#456300'
  },
  buttonsFooter: {
    color:'#84bd00',
    textAlign:'center',
    alignItems:'center'
  },
  container: {
    flex: responsiveScalar(4/5),
    backgroundColor: '#fbfbfb'
  },

});
