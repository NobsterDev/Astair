import React from 'react';
import {createAppContainer, HeaderBackButton} from 'react-navigation';
import {Dimensions, ScrollView, Text, Image, View} from 'react-native';
import createStackNavigator from 'react-navigation-stack';
//screen
import AirConditioner from '../Containers/AirConditioner';
import Scheduler from '../Containers/Scheduler';
import CalendarScreen from '../Containers/SchedulerScreens/CalenderScreen.js';
import EndingClockScreen from '../Containers/SchedulerScreens/EndingClockScreen.js';
import PeopleSelectScreen from '../Containers/SchedulerScreens/PeopleSelectScreen.js';
import RoomAndStartingClockScreen from '../Containers/SchedulerScreens/RoomAndStartingClockScreen.js';
import SummaryScreen from '../Containers/SchedulerScreens/SummaryScreen.js';
import ListSchedulesByName from '../Containers/SchedulerScreens/ListSchedulesByName.js';

import ButtonBox from '../Components/ButtonBox';
import {Images} from '../Themes';
import styles from './Styles/AppNavigationStyle';
import Loading from '../Containers/Loading.js';

class Navigationmenu extends React.Component {
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
    this.navigation.navigate('Scheduler');
  };

  openAC = () => {
    this.navigation.navigate('AirConditioner');
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
const myschedulesNavigator = createStackNavigator(
  {
    ListSchedulesByName: {
      screen: ListSchedulesByName,
      navigationOptions: ({navigation}) => ({
        //don't forget parentheses around the object notation
        title: 'ListSchedulesByName',
        headerTitleStyle: {width: Dimensions.get('window').width},
        headerLeft: (
          <HeaderBackButton onPress={() => navigation.goBack(null)} />
        ),
      }),
    },
  },
  {
    initialRouteName: 'ListSchedulesByName',
    navigationOptions: {
      header: null,
    },
    defaultNavigationOptions: ({navigation}) => ({
      //don't forget parentheses around the object notation
      title: 'ListSchedulesByName',
      headerTitleStyle: {width: Dimensions.get('window').width},
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
    }),
  },
);
const createnewscheduleNavigator = createStackNavigator(
  {
    CalendarScreen: {
      screen: CalendarScreen,
      navigationOptions: ({navigation}) => ({
        //don't forget parentheses around the object notation
        title: 'Calendar',
        headerTitleStyle: {width: Dimensions.get('window').width},
        headerLeft: (
          <HeaderBackButton onPress={() => navigation.goBack(null)} />
        ),
      }),
    },

    RoomAndStartingClockScreen: {
      screen: RoomAndStartingClockScreen,
      navigationOptions: ({navigation}) => ({
        //don't forget parentheses around the object notation
        title: 'RoomAndStartingClockScreen',
        headerTitleStyle: {width: Dimensions.get('window').width},
        headerLeft: (
          <HeaderBackButton onPress={() => navigation.goBack(null)} />
        ),
      }),
    },

    EndingClockScreen: {
      screen: EndingClockScreen,
      navigationOptions: ({navigation}) => ({
        //don't forget parentheses around the object notation
        title: 'EndingClockScreen',
        headerTitleStyle: {width: Dimensions.get('window').width},
        headerLeft: (
          <HeaderBackButton onPress={() => navigation.goBack(null)} />
        ),
      }),
    },

    PeopleSelectScreen: {
      screen: PeopleSelectScreen,
      navigationOptions: ({navigation}) => ({
        //don't forget parentheses around the object notation
        title: 'PeopleSelectScreen',
        headerTitleStyle: {width: Dimensions.get('window').width},
        headerLeft: (
          <HeaderBackButton onPress={() => navigation.goBack(null)} />
        ),
      }),
    },

    SummaryScreen: {
      screen: SummaryScreen,
      navigationOptions: ({navigation}) => ({
        //don't forget parentheses around the object notation
        title: 'SummaryScreen',
        headerTitleStyle: {width: Dimensions.get('window').width},
        headerLeft: (
          <HeaderBackButton onPress={() => navigation.goBack(null)} />
        ),
      }),
    },
  },
  {
    initialRouteName: 'CalendarScreen',
    navigationOptions: {
      header: null,
    },
    defaultNavigationOptions: ({navigation}) => ({
      //don't forget parentheses around the object notation
      title: 'Create New Schedule',
      headerTitleStyle: {width: Dimensions.get('window').width},
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
    }),
  },
);

const scheduleNavigator = createStackNavigator(
  {
    Scheduler: {
      screen: Scheduler,
      navigationOptions: ({navigation}) => ({
        //don't forget parentheses around the object notation
        title: 'Scheduler',

        headerTintColor: '#FFFFFF',
        headerStyle: {
          backgroundColor: '#000051',
        },
        headerTitleStyle: {width: Dimensions.get('window').width},
        headerLeft: (
          <HeaderBackButton
            tintColor="#FFFFFF"
            onPress={() => navigation.goBack(null)}
          />
        ),
      }),
    },
    newschedule: {screen: createnewscheduleNavigator},
    manageschedules: {screen: myschedulesNavigator},
  },
  {
    initialRouteName: 'Scheduler',
    navigationOptions: {
      header: null,
    },
    defaultNavigationOptions: {},
  },
);

const mainNavigator = createStackNavigator(
  {
    Navigationmenu: {screen: Navigationmenu},
    Scheduler: {
      screen: scheduleNavigator,
    },
    AirConditioner: {screen: AirConditioner},
  },
  {
    initialRouteName: 'Navigationmenu',
  },
);

export default createAppContainer(mainNavigator);
