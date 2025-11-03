import { StyleSheet } from 'react-native';
import {
  scale as s,
  moderateScale as ms,
} from 'react-native-size-matters/extend';
import { globalStyles, factor } from '../globalStyles';

export const styles = StyleSheet.create({
  container: {
    // paddingVertical: 10,
  },
  sessionCardBox: {
    marginTop: s(50),
  },
  allCardBox: {
    ...globalStyles.allCardBox,
    marginTop: s(60),
  },
  card:{
    ...globalStyles.card,
  },

  hindiQuestion: {
    fontFamily: 'NotoSansDevanagari-Regular',
    fontSize: 18,
    fontWeight: '700',
    paddingBottom: s(10),
    lineHeight: 33,
    color:'#2B353A'
  },

  hindiAns: {
    fontSize: 18,
    lineHeight: 33,
    fontWeight: '400',
    fontFamily: 'NotoSansDevanagari-Regular',
  },

  sectionTitle: {
    ...globalStyles.sectionTitle,
  },

  heading:{ 
    fontSize:16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: s(20),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: s(8),
    paddingHorizontal: s(18),
  },
  dot: {
    width: s(8),
    height: s(8),
    borderRadius: s(3),
    backgroundColor: '#111827',
    marginTop: s(8),
    marginRight: s(15),
  },
  item: { flex: 1, fontSize: ms(15,factor), lineHeight: s(29), color: '#1f2937' },
  imagebox: {
    width: '100%',
    aspectRatio: 322 / 157,
    borderRadius: s(10),
    marginBottom:s(10),
  },

  sessionActivityImage: {
    width: '100%',
    height: '100%',
  },
  latin: {
    fontFamily: 'NotoSans-Regular', 
    includeFontPadding: false,
  },
});
