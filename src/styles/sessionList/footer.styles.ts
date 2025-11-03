import { StyleSheet } from 'react-native';
import {ms,s,factor} from '../theme/scales';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center', 
    width: '100%',                
    height: s(64),                 
    flexShrink: 0,                  
    // borderWidth: 1,                 
    borderColor: '#CBDAE0',         
    backgroundColor: '#FFF',         
  },
  item: { 
    flex: 1,
    alignItems: 'center',
    paddingVertical:s(10),        
  },
  itemActive: {
    backgroundColor: '#EAF2F5',             
  }, 
  icon: {  
    width: s(22),       
    height: s(22),          
  },
  label: {
      color: '#2B353A',            
      textAlign: 'center',
      fontFamily: 'Quicksand',
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 14.4,           
      letterSpacing: s(1),
      textTransform: 'uppercase',
  }
});
