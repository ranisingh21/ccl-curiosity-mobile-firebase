import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters/extend';
import { factor } from '../globalStyles';

export const COLORS = {
  bgSoft: 'white',
  text: '#2B353A',
  headerColor: '#E1E8EB',
  subText: '#6C7177',
};

export const styles = StyleSheet.create({
  headerContaner: {
    paddingHorizontal: scale(19),
    paddingBottom: scale(12),
    backgroundColor: COLORS.headerColor,
  },

  backArrowImage: {
    fontSize: 30,
    color: COLORS.text,
    marginTop: scale(32),
    marginBottom: scale(25),
  },

  title: {
    fontSize: 28,
    color: COLORS.text,
    marginBottom: scale(10),
    paddingLeft: scale(10),
    fontFamily: 'Quicksand-Bold',
    // fontWeight: '700',
    // lineHeight: 20,
  },

  tabsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(10),
    paddingBottom: scale(8),
    paddingLeft: scale(11),
  },

  tab: {
    color: COLORS.text,
    lineHeight: 20,
    fontFamily: 'Quicksand-SemiBold',
    // fontWeight: '600',
    fontSize:14,
  },

  tabDivider: {
    color: COLORS.text,
    marginHorizontal: scale(1),
    fontWeight: 400,
    fontSize: 14,
  },
});
