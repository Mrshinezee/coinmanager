import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity,Text, Alert } from 'react-native';
import { Table, Row, Cell, TableWrapper } from 'react-native-table-component';
import { withNavigation } from 'react-navigation';
import Data from '../util/data';


const Button = () => (
    <TouchableOpacity style={styles.button}>
    <Text>Add</Text>
  </TouchableOpacity>
);
 
class LoadCoins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Rank','Name', 'Price', 'Action'],
      tableData: Data,
    }
  }
 
  render() {
    const state = this.state;
    const element = (data) => (
      <TouchableOpacity onPress={() => (this.props.navigation.navigate('Purchase', { info: data }))}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Add</Text>
        </View>
      </TouchableOpacity>
    );
 
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16,margin: 10, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#F69517' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: 'white' },
  btn: { width: 58, height: 18, backgroundColor: '#F69517',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});

export default withNavigation(LoadCoins);
