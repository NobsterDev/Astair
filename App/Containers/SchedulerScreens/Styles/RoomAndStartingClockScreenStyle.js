import {StyleSheet, Dimensions} from 'react-native';
import {ApplicationStyles} from '../../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  table: {
    width: Dimensions.get('window').width * 0.9,
    marginLeft: Dimensions.get('window').width * 0.05,
    marginTop: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
  },
});
