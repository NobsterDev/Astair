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
  tcontainer: {flex: 1, padding: 16, paddingTop: 30},
  thead: {height: 40, flex: 1},
  trow: {height: 28},
  ttext: {textAlign: 'center', fontSize: 18},
  htext: {textAlign: 'center', fontSize: 26},

  slide1: {
    flex: 1,
    borderRadius: 50,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
    backgroundColor: '#152145',
  },
  wrapper: {marginBottom: 40},
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  tableview: {
    backgroundColor: '#FFFFFF',
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 40,
    flex: 1,
  },
  tabletext: {margin: 6, textAlign: 'center'},
  tablerow: {flexDirection: 'row', backgroundColor: '#FFF1C1'},
});
