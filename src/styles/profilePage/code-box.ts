import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters/extend';



export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: { 
    width: scale(40),
    height: scale(56),
    borderRadius: scale(8),
    borderWidth: 1,                
    borderColor: 'rgba(19,109,151,0.6)',
    // opacity: 0.6,
    backgroundColor:'#FFFFFF', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxGap: {
    marginRight:scale(4),
  },
  digit: {
    fontSize:20,
    fontFamily:'QuickSand-Bold',
    // fontWeight: '700',
    color: '#232426',
  },
});
