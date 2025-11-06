// src/components/sessionHeader.styles.ts
import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters/extend';

export default StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(24),                          
    width: '100%',  
    padding:scale(10),              
  },
  tabBase: {
    paddingHorizontal: scale(4),
    paddingVertical: scale(8),              // gives room for underline
    alignItems: 'center',
  },
  label: {
    color: '#2B353A',       // CSS variable fallback used
    fontFamily: 'Quicksand-Bold',
    fontSize: 18,
    fontStyle: 'normal',
    // fontWeight: '700',
    lineHeight: 22
  },
  underline: {
    height: scale(4),
    width: '120%',                   
    borderRadius: scale(2),
    backgroundColor: '#189BD7',  
    alignSelf: 'center',
  },

  // keep these for API-compat but unused now
  tabContent: { 
    alignItems: 'center'
  },
  check: { 
    display: 'none' 
  },
});
