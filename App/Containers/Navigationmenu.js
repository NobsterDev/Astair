import React from 'react';
import {ScrollView, Text, Image, View} from 'react-native';
import {Images} from '../Themes';
import ButtonBox from '../Components/ButtonBox';

import styles from './Styles/NavigationmenuStyle';
import Loading from './Loading.js';

export default class Navigationmenu extends React.Component {
  constructor() {
    super();
    this.state = {isLoading: true};
  }
  timer() {}
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      // alert('Moved to next Screen here');
      this.setState({isLoading: false});
    }
  }
  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 3000),
    );
  };

  static navigationOptions = {
    header: null,
  };
  openScheduler = () => {
    console.log(this.props.navigation);
    this.props.navigation.navigate('Scheduler');
  };

  openAC = () => {
    this.props.navigation.navigate('AirConditioner');
  };

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }
    return (
      <View style={styles.mainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.igniteClear} style={styles.logo} />
          </View>
          <Text style={styles.Text}>
            ASTA<Text style={styles.Textcyan}>i</Text>R
          </Text>
          <Text style={styles.sectionText}>
            Control Your Office As You Desire.
          </Text>
          <View style={styles.buttonsContainer}>
            <ButtonBox
              onPress={this.openScheduler}
              style={styles.componentButton}
              image={Images.schedulericon}
              text="Scheduler"
            />
            <ButtonBox
              onPress={this.openAC}
              style={styles.componentButton}
              image={Images.acicon}
              text="Air Conditioner"
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
