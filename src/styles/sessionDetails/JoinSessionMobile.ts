import { StyleSheet } from 'react-native';
import {
  scale as s,
  moderateScale as ms,
} from 'react-native-size-matters/extend';
import { globalStyles, factor } from '../globalStyles';


export const styles = StyleSheet.create({
  card: {
    ...globalStyles.card,
  },

  cardTitle: {
    fontSize:20,
    fontWeight: '700',
    color: '#2B353A',
    fontFamily: 'Quicksand-SemiBold',
    marginBottom: s(20),
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
    borderRadius: ms(12,factor),
    borderWidth: 1,
    borderColor: '#E1E8EB',
    paddingLeft: s(21),
    width: s(304),
    height: s(58),
    marginLeft:s(10),
  },

  iconCircle: {
    width: s(34),
    aspectRatio: 1,
    borderRadius: s(17),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: s(10),
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
