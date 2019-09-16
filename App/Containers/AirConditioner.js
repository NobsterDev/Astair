import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AirConditionerStyle';

class AirConditioner extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>AirConditioner Container</Text>
      </ScrollView>
    );
  }
}
