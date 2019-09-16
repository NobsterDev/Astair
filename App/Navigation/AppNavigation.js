import React from 'react';
import {
  createAppContainer,
  HeaderBackButton,
  createStackNavigator,
} from 'react-navigation';
import {Dimensions} from 'react-native';
//screen
import AirConditioner from '../Containers/AirConditioner';
import Scheduler from '../Containers/Scheduler';
import Navigationmenu from '../Containers/Navigationmenu';
import CalendarScreen from '../Containers/SchedulerScreens/CalenderScreen.js';
import EndingClockScreen from '../Containers/SchedulerScreens/EndingClockScreen.js';
import PeopleSelectScreen from '../Containers/SchedulerScreens/PeopleSelectScreen.js';
import RoomAndStartingClockScreen from '../Containers/SchedulerScreens/RoomAndStartingClockScreen.js';
import SummaryScreen from '../Containers/SchedulerScreens/SummaryScreen.js';
import ListSchedulesByName from '../Containers/SchedulerScreens/ListSchedulesByName.js';

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
    /* parent
      navigationOptions: {
        tabBarLabel: 'none!'
      },
      child
      defaultNavigationOptions: {
        title: 'NONE'
      } */
  },
);

export default createAppContainer(mainNavigator);
