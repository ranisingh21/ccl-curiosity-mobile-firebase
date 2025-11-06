// src/components/header.styles.ts
import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters/extend';



export default StyleSheet.create({
  container: {
    width: scale(59),
    // height: ms(59),
    flexShrink: 0,
    aspectRatio: 1,            
    backgroundColor: '#D5E8F5',
    borderWidth: scale(3.333),        
    borderColor: '#FFF',       
    borderRadius: scale(59/2), 
    
  },  
  title: {
    color: '#2B353A',
    textAlign: 'center',
    fontFamily: 'Quicksand',
    fontSize: 20,
    fontStyle: 'normal',  
    fontWeight: '700',
    lineHeight: 24, 
    paddingTop: scale(13),
    paddingBottom: scale(15)
  }
});
