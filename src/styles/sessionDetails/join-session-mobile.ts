import { StyleSheet } from 'react-native';
import { scale ,moderateScale} from 'react-native-size-matters/extend';
import { globalStyles} from '../globalStyles';


export const styles = StyleSheet.create({
  card: {
    ...globalStyles.card,
  },

  cardTitle: {
    fontSize:20,
    fontWeight: '700',
    color: '#2B353A',
    fontFamily: 'Quicksand-SemiBold',
    marginBottom: scale(20),
  },

  muted: {
    color: '#232426',
    fontSize:13,
    fontWeight: '500',
    fontFamily: 'Noto Sans Devanagari',
  },

  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAF2F5',
    borderRadius: moderateScale(12),
    borderWidth: 1,
    borderColor: '#E1E8EB',
    paddingLeft: scale(21),
    width: scale(304),
    height: scale(58),
    marginLeft:scale(10),
  },

  iconCircle: {
    width: scale(34),
    aspectRatio: 1,
    borderRadius: scale(17),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: scale(10),
  },

  actionText: {
    fontSize:15,
    fontWeight: '600',
    color: '#2B353A',
    fontFamily: 'Quicksand-SemiBold',
  },

  arrow: {
    fontWeight: '700',
    color: '#2B353A',
    fontSize: 30,
    paddingLeft: 18,
    paddingBottom: 10,
  },
});
