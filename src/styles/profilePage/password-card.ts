import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters/extend';


export default StyleSheet.create({
  card: {
    backgroundColor: '#F6F6F6',     
    borderRadius: scale(20),       
    paddingTop: scale(22.5), 
    paddingBottom:scale(22.5),
    paddingLeft:scale(51),
    paddingRight:scale(51), 
    marginTop:scale(16),
    marginLeft:scale(20),
    marginRight:scale(20),  
  },      
  school: {
    color: '#2B353A',
  textAlign: 'center',
  fontFamily: 'Quicksand',
  fontSize: 20,
  fontWeight: '600',
  lineHeight: 24,
  },
  location: {
    color: '#2B353A',
  textAlign: 'center',
  fontFamily: 'Quicksand',
  fontSize: 14,
  fontWeight: '500',
  lineHeight: 19.6,
  },
  codeWrap: {
    marginTop: scale(16),
    alignItems: 'center',
  },
  caption: {
    textAlign: 'center',
    color: '#2B353A',
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 16,
    paddingTop:scale(6),
    // fontWeight: '600',
    lineHeight: 22.4,
  },
});
