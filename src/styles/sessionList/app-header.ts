// src/components/header.styles.ts
import { StyleSheet } from 'react-native';
import { factor, ms ,s} from '../../theme/scales';

export default StyleSheet.create({
  container: {
    width: '100%' as const,    
    height:s(119),           // avoids "string not assignable to number"
    backgroundColor: 'rgba(203,218,224,0.6)',
    paddingHorizontal: s(24),
    paddingTop: s(72),
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
