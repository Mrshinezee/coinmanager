import React, { Component } from 'react';
import { Platform, View, Text, TouchableOpacity, StyleSheet, Button, AlertIOS} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HeaderBackButton, NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import Input from './components/Input';


class PurchaseCoin extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            exchange: 'Bittrex',
            usdPrice: '',
            quantity: 0,
            note: '',
            coin: '',
            selectedSwitch: 1,
        };
      }

    static navigationOptions = ({ navigation }) => {
        const title = () => {
          const headerTitle = Platform.OS === 'android' ? 'Purchase' : 'purchase';
          return headerTitle;
        };
        return {
          headerLeft: (
            <HeaderBackButton
            //   onPress={() => navigation.dispatch(NavigationActions.back())}
            onPress={() => (navigation.navigate('Dashboard'))}
            />
          ),
          headerRight: (<Icon
            iconStyle={{ marginRight: 15 }}
            name="done"
            style={{ padding: 10, marginRight: 15 }} 
            size={20}
            onPress={() => (navigation.navigate('Dashboard'))}
          />),
          headerStyle: {
            backgroundColor: 'white',
            ...Platform.select({
              ios: {
                shadowColor: 'rgba(0,0,0, .2)',
                shadowOffset: { height: 1, width: 1 },
                shadowOpacity: 1,
                shadowRadius: 1,
              },
            }),
          },
        //   headerTitleStyle: headerStyle(),
          title: title(),
        };
      }

      handlePurchase = () => {
        const { quantity } = this.state;
        const { onSend } = this.props;
        return AlertIOS.alert('Complete', 'Transaction was successful.');
        if (onSend) {
          onSend(quantity);
        }
    
        this.setState({ quantity: 0 });
      }

      handleTest = (x) => {
        return x;
      }

    render() {
        return (
            <View style={styles.container}>
               <View style={styles.tabSwitch}>
               <TouchableOpacity 
                    style={[styles.switchBuy, { backgroundColor: this.state.selectedSwitch === 1 ? '#F69517' : '#FFF' }]}
                    onPress={() => this.setState({ selectedSwitch: 1})}
                >
                   <Text style={styles.tabText} testID="Buy">
                       Buy
                   </Text>
               </TouchableOpacity>
               <TouchableOpacity 
                    style={[styles.switchSell, { backgroundColor: this.state.selectedSwitch === 2 ? '#F69517' : '#FFF' }]}
                    onPress={() => this.setState({ selectedSwitch: 2})}
               >
                    <Text style={styles.tabText} testID="Sell">    
                       Sell
                   </Text>
               </TouchableOpacity>
               <TouchableOpacity 
                    style={[styles.switchTransfer, { backgroundColor: this.state.selectedSwitch === 3 ? '#F69517' : '#FFF' }]}
                    onPress={() => this.setState({ selectedSwitch: 3})}
               >
                    <Text style={styles.tabText} testID="Transfer">
                       Transfer
                   </Text>
               </TouchableOpacity>
               </View>
               <View style={styles.transForm}>
                   <Input 
                   label='Exchange'
                   placeholder='select an exchange'
                   onChangeText={(exchange) => this.setState({exchange})}
                   value={this.state.exchange}
                   />
                   <Input 
                   label='Cryptocurrency'
                   onChangeText={(coin) => this.setState({coin})}
                   value={this.state.coin}
                   />
                   <Input 
                   label='Price in Usd'
                   onChangeText={(usdPrice) => this.setState({usdPrice})}
                   value={this.state.usdPrice}
                   />
                   <Input 
                   label='Quantity'
                   onChangeText={(quantity) => this.setState({quantity})}
                   value={this.state.quantity}
                   testID="purchasePrice"
                   />
                   <Input 
                   label='Note'
                   multiline = {true}
                   numberOfLines = {4}
                   onChangeText={(note) => this.setState({note})}
                   value={this.state.note}
                   />
               </View>
               <TouchableOpacity
                style={styles.button}
                testID="purchaseButton"
                onPress={() => this.handlePurchase()}
                >
                    <Text style={styles.buttonText}>Save Transcation</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// PurchaseCoin.propTypes = {
//   params: PropTypes.object,
//   state: PropTypes.object,
// };

// PurchaseCoin.defaultProps = {
//   params: {},
//   state: {},
// };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'flex-start',
      color: 'white',
    },
    transForm: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
    },
    tabSwitch: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        borderColor: 'gray',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
 
    },
    tabText: {
        textAlign: 'center', 
    },
    switchBuy: {
        width: 100,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
    },
    switchSell: {
        width: 100,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRightColor: 'white',
        borderLeftColor: 'white',
    },
    switchTransfer: {
        width: 100,
        padding: 10,
         borderBottomRightRadius: 50,
         borderTopRightRadius: 50,
         borderWidth: 1,
         borderColor: 'black',
    },
    button: {
        backgroundColor: '#F69517',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        margin: 20,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
});
export default PurchaseCoin;
