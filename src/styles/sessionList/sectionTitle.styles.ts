import { StyleSheet } from 'react-native';
import {factor, ms, s} from '../theme/scales' ;

export default StyleSheet.create({
  title: {
    width:s(137),
    height:s(19),
    color: '#2B353A',            
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.2, 
    marginLeft:s(20),
    marginRight:s(20)     
  }
});
