// src/components/sessionHeader.styles.ts
import { StyleSheet } from 'react-native';
import {ms,s,factor} from '../../theme/scales';

export default StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s(24),                          
    width: '100%',  
    padding:s(10),              
  },
  tabBase: {
    paddingHorizontal: s(4),
    paddingVertical: s(8),              // gives room for underline
    alignItems: 'center',
  },
  label: {
    color: '#2B353A',       // CSS variable fallback used
    fontFamily: 'Quicksand',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 22
  },
  underline: {
    height: s(4),
    width: '120%',                   
    borderRadius: s(2),
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
