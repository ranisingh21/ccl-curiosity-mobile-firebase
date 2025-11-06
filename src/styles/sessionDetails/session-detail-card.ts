import { StyleSheet } from 'react-native';
import { scale ,moderateScale} from 'react-native-size-matters/extend';
import { globalStyles, factor } from '../globalStyles';

export const styles = StyleSheet.create({
  container: {
    // paddingVertical: 10,
  },
  sessionCardBox: {
    marginTop: scale(50),
  },
  allCardBox: {
    ...globalStyles.allCardBox,
    marginTop: scale(60),
  },
  card:{
    ...globalStyles.card,
  },

  hindiQuestion: {
    // fontFamily: 'NotoSansDevanagari-SemiBold',
    fontFamily: 'NotoSansDevanagari-Bold',
    fontSize: 18,
    // fontWeight: '700',
    paddingBottom: scale(10),
    lineHeight: 33,
    color:'#2B353A'
  },

  hindiAns: {
    fontSize: 18,
    lineHeight: 33,
    fontWeight: '400',
    // color:'red',
    fontFamily: 'NotoSansDevanagar-Regular',
  },

  sectionTitle: {
    ...globalStyles.sectionTitle,
  },

  heading:{ 
    fontSize:16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: scale(20),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: scale(8),
    paddingHorizontal: scale(18),
  },
  dot: {
    width: scale(8),
    height: scale(8),
    borderRadius: scale(3),
    backgroundColor: '#111827',
    marginTop: scale(8),
    marginRight: scale(15),
  },
  item: { flex: 1, fontSize: moderateScale(15,factor), lineHeight: scale(29), color: '#1f2937' },
  imagebox: {
    width: '100%',
    aspectRatio: 322 / 157,
    borderRadius: scale(10),
    marginBottom:scale(10),
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
