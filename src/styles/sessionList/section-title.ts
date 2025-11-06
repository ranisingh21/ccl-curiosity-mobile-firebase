import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters/extend';

export default StyleSheet.create({
  title: {
    width:scale(137),
    height:scale(22),
    color: '#2B353A',            
    fontFamily: 'Quicksand-Bold',
    fontSize: 16,
    // fontWeight: '700',
    lineHeight: 19.2, 
    marginLeft:scale(20),
    marginRight:scale(20)     
  }
});
