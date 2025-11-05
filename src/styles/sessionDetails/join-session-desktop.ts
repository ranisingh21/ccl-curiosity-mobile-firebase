import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters/extend';
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
    marginTop: scale(10),
    marginBottom: scale(8),
  },

  deviceCardmuted: {
    color: '#2B353A',
    fontSize:15,
  },

  deviceLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: scale(18),
  },

  label: {
    fontSize:13,
    paddingHorizontal: scale(5),
    flex: 1,
  },

  linkRow: {
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
    paddingHorizontal: scale(14),
    paddingVertical: scale(10),
    borderRadius: scale(10),
    backgroundColor: '#189BD7',
  },

  BtnText: {
    color: '#FFFFFF',
    fontWeight: '400',
    fontSize:17,
    marginRight: scale(8),
    flex: 1,
  },

  copyIcon: {
    fontSize:18,
    color: '#fff',
  },

  pinRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(5),
  },

  pinBox: {
    width: scale(32),
    paddingVertical: scale(8),
    minHeight: scale(44),
    borderRadius: scale(8),
    borderWidth: 1,
    borderColor: 'grey',
    textAlign: 'center',
    fontSize:18,
    fontWeight: '700',
    color: '#485860',
    backgroundColor: '#fff',
  },
});
