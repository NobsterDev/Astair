import React from 'react';
import {View, Text, ScrollView, Image, Dimensions} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator, HeaderBackButton} from 'react-navigation-stack';

import AirConditioner from './App/Containers/AirConditioner';
import Scheduler from './App/Containers/Scheduler';
import CalendarScreen from './App/Containers/SchedulerScreens/CalenderScreen.js';
import EndingClockScreen from './App/Containers/SchedulerScreens/EndingClockScreen.js';
import PeopleSelectScreen from './App/Containers/SchedulerScreens/PeopleSelectScreen.js';
import RoomAndStartingClockScreen from './App/Containers/SchedulerScreens/RoomAndStartingClockScreen.js';
import SummaryScreen from './App/Containers/SchedulerScreens/SummaryScreen.js';
import ListSchedulesByName from './App/Containers/SchedulerScreens/ListSchedulesByName.js';

import ButtonBox from './App/Components/ButtonBox';
import {Images} from './App/Themes';
import styles from './App/Navigation/Styles/AppNavigationStyle';
import Loading from './App/Containers/Loading.js';
class App extends React.Component {
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
    defaultNavigationOptions: {
      //don't forget parentheses around the object notation
      title: 'ListSchedulesByName',
    },
  },
);
const createnewscheduleNavigator = createStackNavigator(
  {
    CalendarScreen: {
      screen: CalendarScreen,
      navigationOptions: {
        //don't forget parentheses around the object notation
        title: 'Calendar',
      },
    },

    RoomAndStartingClockScreen: {
      screen: RoomAndStartingClockScreen,
      navigationOptions: {
        //don't forget parentheses around the object notation
        title: 'RoomAndStartingClockScreen',
      },
    },

    EndingClockScreen: {
      screen: EndingClockScreen,
      navigationOptions: {
        //don't forget parentheses around the object notation
        title: 'EndingClockScreen',
      },
    },

    PeopleSelectScreen: {
      screen: PeopleSelectScreen,
      navigationOptions: ({navigation}) => ({
        //don't forget parentheses around the object notation
        title: 'PeopleSelectScreen',
      }),
    },

    SummaryScreen: {
      screen: SummaryScreen,
      navigationOptions: ({navigation}) => ({
        //don't forget parentheses around the object notation
        title: 'SummaryScreen',
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
    Navigationmenu: {screen: App},
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
