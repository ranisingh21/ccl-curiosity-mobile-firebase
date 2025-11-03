// src/components/header.styles.ts
import { StyleSheet } from 'react-native';
import { ms,s , factor} from '../../theme/scales';

export default StyleSheet.create({
  container: {
    width: s(59),
    // height: ms(59),
    flexShrink: 0,
    aspectRatio: 1,            
    backgroundColor: '#D5E8F5',
    borderWidth: s(3.333),        
    borderColor: '#FFF',       
    borderRadius: s(59/2), 
    
  },  
  title: {
    color: '#2B353A',
    textAlign: 'center',
    fontFamily: 'Quicksand',
    fontSize: 20,
    fontStyle: 'normal',  
    fontWeight: '700',
    lineHeight: 24, 
    paddingTop: s(13),
    paddingBottom: s(15)
  }
});
