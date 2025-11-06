import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters/extend';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',     
    padding: scale(14),
    marginTop: scale(12),
    width: '100%',                    
    height: scale(84),                  
    flexShrink: 0,                 
    borderRadius: scale(8),                
  },
  datePill: {
    flexDirection: 'column',           
    paddingTop: scale(6),                    
    paddingRight: scale(10),                
    paddingBottom: scale(9),                
    paddingLeft: scale(8),                  
    justifyContent: 'center',         
    alignItems: 'center',            
    marginBottom: scale(3),
    borderRightWidth:scale(1),
    borderRightColor:'#485860',
  },
  date: { 
    color: '#2B353A',            
    textAlign: 'center',         
    fontFamily: 'Quicksand-Medium',
    fontSize: 14,        
    // fontWeight: '500',
    lineHeight: 14,  
  },
  middle: { 
    flex: 1,  
  },
  title: { 
    color: '#485860',             
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 16,
    fontStyle: 'normal',
    // fontWeight: '600',
    lineHeight: 22.4,  
    paddingLeft: scale(10),
  },
  sub:   { 
    color: '#485860',            
    fontFamily: 'Quicksand-Regular',
    fontSize: 12,
    // fontWeight: '500',
    lineHeight: 16.8, 
    paddingLeft: scale(10),
    paddingTop: scale(3)
  },

  chevCircle: {
    width:scale(47), 
    height:scale(37), 
    borderRadius: scale(60),
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor:'#189BD7'  ,
  },
  chev: { 
    // height:s(17),
    // width: s(19),
    color: '#FFF',               
    textAlign: 'center',        
    fontFamily: 'Inter',        
    fontSize: 20,
    fontStyle: 'normal',         
    fontWeight: '700',
    lineHeight: 16,              
    letterSpacing: scale(0.28),
    textTransform: 'uppercase',
    paddingTop: scale(6),
    paddingBottom: scale(10),
    paddingLeft: scale(13),
    paddingRight: scale(13),
  }, // white arrow
});
