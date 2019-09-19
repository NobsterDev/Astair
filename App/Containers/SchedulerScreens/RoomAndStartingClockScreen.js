import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Stepindicator from '../../Components/StepIndicator';
import styles from './Styles/RoomAndStartingClockScreenStyle';
import {
  Table,
  TableWrapper,
  Row,
  Cell,
  Rows,
  Col,
} from 'react-native-table-component';
import Swiper from 'react-native-swiper';
import {Snackbar} from 'react-native-paper';

const table = {
  tableHead: ['Room Alpha', 'Room Beta', 'Room Chalie'],
  tableTitle: [
    '9:00',
    '9:00',
    '9:00',
    '9:00',
    '9:00',
    '9:00',
    '9:00',
    '9:00',
    '9:00',
    '9:00',
    '9:00',
    '9:00',
    '9:00',
    '9:00',
    '9:00',
    '9:00',
  ],
  tableData: [
    [
      '1',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      'The Wise Pesasdsaasdsson123',
      'The Wise Person',
      'The Wise Person',
      '',
    ],
    [
      '2',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      'The Wise Pesasdsaasdsson',
      'The Wise Person',
      'The Wise Person',
      '',
    ],
    [
      '3',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      'The Wise Pesasdsaasdsson',
      'The Wise Person',
      'The Wise Person',
      '',
    ],
  ],
};

export default class RoomAndStartingClockScreen extends React.Component {
  state = {
    visible: false,
  };

  render() {
    const element = (data, index) => (
      <TouchableOpacity
        style={{paddingTop: 5, paddingBottom: 5}}
        onPress={() => {
          if (data.toString().length === 0) {
            console.log(index);
          } else {
            this.setState({visible: false});
            this.setState({visible: true});
          }
        }}>
        <View style={styles.btn}>
          <Text style={styles.ttext}>{data}</Text>
        </View>
      </TouchableOpacity>
    );
    return (
      <View style={styles.mainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={styles.container}
          style={styles.container}
          ref="container">
          <Stepindicator currentPosition={1} />
          <Text style={styles.Text}>Select Desired Room and Zero Hour</Text>
          <Swiper
            style={styles.wrapper}
            height={Dimensions.get('window').height * 0.8}
            horizontal={false}>
            {table.tableData.map((cellDataout, cellIndexout) => (
              <View key={cellIndexout} style={styles.slide1}>
                <Table
                  borderStyle={{
                    borderWidth: 2,
                    borderColor: '#c8e1ff',
                  }}>
                  <TableWrapper style={styles.tablerow}>
                    <Cell
                      data={table.tableHead[cellIndexout]}
                      textStyle={styles.tabletext}></Cell>
                  </TableWrapper>
                  <TableWrapper style={styles.tablerow}>
                    <Text>{console.log({cellDataout})}</Text>
                    <Cell textStyle={styles.tabletext} data={'9:00'}></Cell>
                    <Cell textStyle={styles.tabletext} data={'asda'}></Cell>
                  </TableWrapper>
                </Table>
              </View>
            ))}
          </Swiper>
          {/* {table.tableData.map((cellDataout, cellIndexout) => (
            <View key={cellIndexout} style={styles.tableview}>
              <Table
                borderStyle={{
                  borderWidth: 2,
                  borderColor: '#1a237e',
                }}>
                <Row
                  data={table.tableHead}
                  style={styles.thead}
                  textStyle={styles.htext}
                />
                <TableWrapper style={{flexDirection: 'row'}}>
                  <TableWrapper style={{flex: 1}}>
                    {table.tableTitle.map((cellData, cellIndex) => (
                      <Cell
                        key={cellIndex}
                        data={cellData}
                        textStyle={styles.ttext}
                      />
                    ))}
                  </TableWrapper>
                  <TableWrapper style={{flex: 4}}>
                    {cellDataout.map((cellData, cellIndex) => (
                      <Cell
                        key={cellIndex}
                        data={element(cellData, cellIndex)}
                        textStyle={styles.ttext}
                      />
                    ))}
                  </TableWrapper>
                </TableWrapper>
              </Table>
            </View>
          ))} */}
        </ScrollView>
        <Snackbar
          duration={1500}
          style={{backgroundColor: '#FFFFFF'}}
          visible={this.state.visible}
          onDismiss={() => this.setState({visible: false})}
          action={{
            label: 'Contact Administrator',
            onPress: () => {
              // Do Something Admin
            },
          }}>
          <Text style={{color: '#000000'}}>Room Already Occupied</Text>
        </Snackbar>
      </View>
    );
  }
}
