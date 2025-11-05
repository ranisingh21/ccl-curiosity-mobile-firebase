import { StyleSheet } from 'react-native';
import {ms,s,factor} from '../../theme/scales';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',     
    padding: s(14),
    marginTop: s(12),
    width: '100%',                    
    height: s(84),                  
    flexShrink: 0,                 
    borderRadius: s(8),                
  },
  datePill: {
    flexDirection: 'column',           
    paddingTop: s(6),                    
    paddingRight: s(10),                
    paddingBottom: s(9),                
    paddingLeft: s(8),                  
    justifyContent: 'center',         
    alignItems: 'center',            
    marginBottom: s(3),
    borderRightWidth:s(1),
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
    paddingLeft: s(10),
  },
  sub:   { 
    color: '#485860',            
    fontFamily: 'Quicksand-Regular',
    fontSize: 12,
    // fontWeight: '500',
    lineHeight: 16.8, 
    paddingLeft: s(10),
    paddingTop: s(3)
  },

  chevCircle: {
    width:s(47), 
    height:s(37), 
    borderRadius: s(60),
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
    letterSpacing: s(0.28),
    textTransform: 'uppercase',
    paddingTop: s(6),
    paddingBottom: s(10),
    paddingLeft: s(13),
    paddingRight: s(13),
  }, // white arrow
});
