import { StyleSheet } from 'react-native';
import {
  scale as s,
  moderateScale as ms,
} from 'react-native-size-matters/extend';
import { factor } from '../globalStyles';

export const COLORS = {
  bgSoft: 'white',
  text: '#2B353A',
  headerColor: '#E1E8EB',
  subText: '#6C7177',
};

export const styles = StyleSheet.create({
  headerContaner: {
    paddingHorizontal: s(19),
    paddingBottom: s(12),
    backgroundColor: COLORS.headerColor,
  },

  backArrowImage: {
    fontSize: 30,
    color: COLORS.text,
    marginTop: s(32),
    marginBottom: s(25),
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: s(10),
    paddingLeft: s(10),
    fontFamily: 'Quicksand',
    lineHeight: 20,
  },

  tabsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(10),
    paddingBottom: s(8),
    paddingLeft: s(11),
  },

  tab: {
    color: COLORS.text,
    lineHeight: 20,
    fontFamily: 'Quicksand-SemiBold',
    fontWeight: '600',
    fontSize:14,
  },

  tabDivider: {
    color: COLORS.text,
    marginHorizontal: s(1),
    fontWeight: 400,
    fontSize: 14,
  },
});
