import { StyleSheet } from 'react-native';
import {ms,s, factor} from '../../theme/scales';


export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    width: s(44),
    height: s(48),
    borderRadius: s(10),
    borderWidth: s(1),
    borderColor: '#E5E7EB',
    backgroundColor:'#FFFFFF', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxGap: {
    marginRight:s(12),
  },
  digit: {
    fontSize:18,
    fontWeight: '700',
    color: '#0F172A',
  },
});
