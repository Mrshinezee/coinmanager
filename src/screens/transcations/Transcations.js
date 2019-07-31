import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

class Transcations extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedDate: '',
        };
      }
    static navigationOptions = {
        // headerTitle: <LogoTitle />,
        // headerTitleStyle: headerStyle(),
        tabBarIcon:  <Icon name="subject" size={25} />,
        // title: title(),
        tabBarLabel: 'Transcations',
      };
    render() {
        console.log('state', this.state.selectedDate, typeof this.state.selectedDate);
        const Date = this.state.selectedDate;
        return (
            <View style={styles.container}>
                <Calendar
                    onDayPress={(day) => {this.setState({selectedDate: day.dateString })}}
                    markedDates={{
                        Date: {selected: true, marked: true, selectedColor: 'blue'},
                      }}
                 />
                 <View style={styles.TransHeader}>
                     <Text>Transcation</Text>
                     <Icon name="more-horiz" size={20}/> 
                 </View>
                 <ScrollView style={{margin: 10}}>
                     <View style={styles.transList}>
                         <View style={styles.contentLeft}>
                             <Icon name="add-shopping-cart" size={30}  style={{margin: 10}}/> 
                             <View style={styles.item}>
                                 <Text>Buy</Text>
                                 <Text>Bitcoin</Text>
                             </View> 
                         </View>
                         <View style={styles.contentRight}>
                                <Text>$50</Text>
                                <Text>+10%</Text>
                         </View>

                     </View>
                     <View style={styles.transList}>
                         <View style={styles.contentLeft}>
                             <Icon name="add-shopping-cart" size={30}  style={{margin: 10}}/> 
                             <View style={styles.item}>
                                 <Text>Sell</Text>
                                 <Text>Litcoin</Text>
                             </View> 
                         </View>
                         <View style={styles.contentRight}>
                                <Text>$30</Text>
                                <Text>-6%</Text>
                         </View>

                     </View>
                 </ScrollView>
            </View>
        );
    }
}

export default Transcations;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    TransHeader: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
    },
    transList: {
        backgroundColor: '#F7F7F7',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        margin: 5,
    },
    contentLeft: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
});