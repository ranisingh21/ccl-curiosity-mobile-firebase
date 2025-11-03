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
  sectionTitle: {
    ...globalStyles.sectionTitle,
  },

  taskRowBox: {
    paddingLeft: s(4),
  },
  taskText: {
    fontSize:17,
    color: '#232426',
    marginBottom: s(12),
    fontFamily: 'Quicksand',
    fontWeight: '600',
    lineHeight: 22.4,
  },

  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#00000020',
    paddingVertical: s(8),
    color: '#232426',
    marginHorizontal: s(5),
  },

  taskLabel: {
    fontSize: 14,
    color: '#2B353A',
    fontWeight: '600',
    fontFamily: 'Quicksand-SemiBold',
    lineHeight: 19.6,
  },

  ctaCircle: {
    marginLeft: 'auto',
    width: s(47),
    height: s(37),
    borderRadius: s(60),
    backgroundColor: '#189BD7',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginVertical: s(6),
  },

  ctaArrow: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    paddingBottom: s(17),
  },

  divider: {
    height: 1,
    backgroundColor: '#D8DEE4',
  },
  taskCardBox: {
    marginBottom: s(33),
  },
});
