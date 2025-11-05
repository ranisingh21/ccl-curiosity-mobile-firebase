import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters/extend';


export default StyleSheet.create({
  card: {
    flexDirection: 'row', 
    marginTop:scale(12),           
    height: scale(111),
    paddingTop: scale(26),
    paddingRight: scale(75),
    paddingBottom: scale(25),
    paddingLeft: scale(20),
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: scale(20),
    borderWidth: scale(1),                  
    borderColor: '#F6F6F6',          
    backgroundColor: '#F6F6F6'                 
  },
  left: {
    marginRight: scale(12),             
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
    letterSpacing: scale(0.5),
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

