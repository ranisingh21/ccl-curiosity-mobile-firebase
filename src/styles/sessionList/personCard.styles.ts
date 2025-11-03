import { StyleSheet } from 'react-native';
import{ms,s,factor} from '../../theme/scales';

export default StyleSheet.create({
  card: {
    flexDirection: 'row', 
    marginTop:s(12),           
    height: s(111),
    paddingTop: s(26),
    paddingRight: s(75),
    paddingBottom: s(25),
    paddingLeft: s(20),
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: s(20),
    borderWidth: s(1),                  
    borderColor: '#F6F6F6',          
    backgroundColor: '#F6F6F6'                 
  },
  left: {
    marginRight: s(12),             
  },
  right: {
    flex: 1,
  },
  badge: {
    color: '#2B353A',              
    fontFamily: 'Quicksand',
    fontSize: 12,
    fontStyle: 'normal',            
    fontWeight: '500',
    lineHeight: 14.4,               
    letterSpacing: s(0.5),
    textTransform: 'uppercase',
  },
  name: {
    color: '#2B353A',
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22.4
  },
  phone: {
    color: '#2B353A',
    fontFamily: 'Quicksand',
    fontSize: 14,
    fontWeight: '500',
    lineHeight : 22.4,
  }
});

