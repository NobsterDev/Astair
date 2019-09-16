import React, {Component} from 'react';
import {ScrollView, View, Text} from 'react-native';
import ButtonBox from '../Components/ButtonBox';
import {Images} from '../Themes';

import {Calendar} from 'react-native-calendars';
import StepIndicator from 'react-native-step-indicator';
import {Snackbar} from 'react-native-paper';

import styles from './Styles/SchedulerStyle';
export default class Scheduler extends React.Component {
  openScheduler = () => {
    this.props.navigation.navigate('Scheduler');
  };

  openScheduler = () => {
    this.props.navigation.navigate('Scheduler');
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={styles.container}>
          <Text style={styles.Text}>Please Select Your Action</Text>
          <View style={styles.buttonsContainer}>
            <ButtonBox
              onPress={this.openScheduler}
              style={styles.componentButton}
              image={Images.schedulericon}
              text="Create New Schedule"
            />
            <ButtonBox
              onPress={this.openAC}
              style={styles.componentButton}
              image={Images.acicon}
              text="Manage my Schedules"
            />
          </View>
        </ScrollView>
        <View style={styles.banner}>
          <Text style={styles.bannerLabel}>This is Astar Project</Text>
        </View>
      </View>
    );
  }
}
