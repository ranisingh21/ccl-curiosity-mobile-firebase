import { StyleSheet } from 'react-native';
import {
  scale as s,
  moderateScale as ms,
} from 'react-native-size-matters/extend';
import { globalStyles, factor } from '../globalStyles'; 

export const styles = StyleSheet.create({
  allCard: {
    //   ...globalStyles.allCardBox,
  },
  card: {
    ...globalStyles.card,
  },
  sectionTitle: {
    ...globalStyles.sectionTitle,
  },

  deviceCard: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Quicksand-SemiBold',
    lineHeight: 24,
    color: '#2B353A',
    marginTop: s(10),
    marginBottom: s(8),
  },

  deviceCardmuted: {
    color: '#2B353A',
    fontSize:15,
  },

  deviceLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: s(18),
  },

  label: {
    fontSize:13,
    paddingHorizontal: s(5),
    flex: 1,
  },

  linkRow: {
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
    paddingHorizontal: s(14),
    paddingVertical: s(10),
    borderRadius: s(10),
    backgroundColor: '#189BD7',
  },

  BtnText: {
    color: '#FFFFFF',
    fontWeight: '400',
    fontSize:17,
    marginRight: s(8),
    flex: 1,
  },

  copyIcon: {
    fontSize:18,
    color: '#fff',
  },

  pinRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(5),
  },

  pinBox: {
    width: s(32),
    paddingVertical: s(8),
    minHeight: s(44),
    borderRadius: s(8),
    borderWidth: 1,
    borderColor: 'grey',
    textAlign: 'center',
    fontSize:18,
    fontWeight: '700',
    color: '#485860',
    backgroundColor: '#fff',
  },
});
