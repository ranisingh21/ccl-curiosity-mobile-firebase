import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters/extend';


export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center', 
    width: '100%',                
    height: scale(64),                 
    flexShrink: 0,                  
    // borderWidth: 1,                 
    borderColor: '#CBDAE0',         
    backgroundColor: '#FFF',         
  },
  item: { 
    flex: 1,
    alignItems: 'center',
    paddingVertical:scale(10),        
  },
  itemactive: {
    backgroundColor: '#EAF2F5',             
  }, 
  icon: {  
    width: scale(22),       
    height: scale(22),          
  },
  label: {
      color: '#2B353A',            
      textAlign: 'center',
      fontFamily: 'Quicksand-Medium',
      fontSize: 12,
      fontStyle: 'normal',
      // fontWeight: '500',
      lineHeight: 14.4,           
      letterSpacing: scale(1),
      textTransform: 'uppercase',
  }
});
