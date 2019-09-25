import {StyleSheet} from 'react-native';
import {ApplicationStyles, Fonts} from '../../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  Text: {
    ...Fonts.style.h2,
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 2,
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    marginBottom: 50,
    marginTop: 40,
  },
  container: {
    flex: 1,
  },
  wrapper: {marginBottom: 40},
  text: {
    fontSize: 22,
    // alignSelf: 'flex-start',
  },
  listItem: {
    borderWidth: 2,
    borderColor: '#001064',
    height: 40,
    marginBottom: 7,
    marginRight: 45,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    borderBottomRightRadius: 40,
    borderTopRightRadius: 40,
  },
  leftSwipeItem: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#001064',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 50,
    marginBottom: 7,
  },
});
