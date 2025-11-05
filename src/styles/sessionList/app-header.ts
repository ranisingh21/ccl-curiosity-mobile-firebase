// src/components/header.styles.ts
import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters/extend';

export default StyleSheet.create({
  container: {
    width: '100%' as const,    
    height:scale(119),           // avoids "string not assignable to number"
    backgroundColor: 'rgba(203,218,224,0.6)',
    paddingHorizontal: scale(24),
    paddingTop: scale(72),
    // opacity:0.6,
  },  
  title: {
    color: '#2B353A',            // CSS variable fallback used
    fontFamily: 'Quicksand-Medium',
    fontSize: 24,
    // fontStyle: 'normal',         // Optional, can be omitted as it's default
    //fontWeight: '500',
    lineHeight: 28.8,
    //paddingBottom: s(10)
  },
});
