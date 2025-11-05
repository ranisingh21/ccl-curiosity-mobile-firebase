import { StyleSheet } from 'react-native';
import {factor, ms,s} from '../../theme/scales';

export default StyleSheet.create({
  card: {
    backgroundColor: '#F6F6F6',     
    borderRadius: s(20),       
    paddingTop: s(22.5), 
    paddingBottom:s(22.5),
    paddingLeft:s(51),
    paddingRight:s(51), 
    marginTop:s(16),
    marginLeft:s(20),
    marginRight:s(20),  
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
    marginTop: s(16),
    alignItems: 'center',
  },
  caption: {
    textAlign: 'center',
    color: '#2B353A',
    fontFamily: 'Quicksand',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22.4,
  },
});
