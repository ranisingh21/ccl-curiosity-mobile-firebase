import { StyleSheet } from 'react-native';
import {ms,s, factor} from '../../theme/scales';


export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: { 
    width: s(40),
    height: s(56),
    borderRadius: s(8),
    borderWidth: 1,                
    borderColor: 'rgba(19,109,151,0.6)',
    // opacity: 0.6,
    backgroundColor:'#FFFFFF', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxGap: {
    marginRight:s(4),
  },
  digit: {
    fontSize:20,
    fontFamily:'QuickSand-Bold',
    // fontWeight: '700',
    color: '#232426',
  },
});
