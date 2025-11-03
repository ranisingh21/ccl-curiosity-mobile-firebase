import { StyleSheet } from 'react-native';
import {
  scale as s,
  moderateScale as ms,
  verticalScale as vs,
} from 'react-native-size-matters/extend';

export const COLORS = {
  bgSoft: 'White',
  text: '#2B353A',
  subText: '#6C7177',
  cardBg: '#FFFFFF',
  divider: '#D8DEE4',
  primary: '#2F7CF6',
  joinBlue: '#37A9FF',
  headerColor: '#E1E8EB',
};

export const factor = 1;

import { PixelRatio } from 'react-native';
console.log('Font scale:', PixelRatio.getFontScale());

export const globalStyles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.headerColor },

  bodyContainer: {
    backgroundColor: 'whitesmoke',
    paddingHorizontal: s(19),
    gap: 60,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2B353A',
    marginBottom: vs(10),
    marginTop: vs(4),
    marginLeft: vs(13),
  },

  allCardBox: {
    marginTop: s(60),
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: s(8),
    borderWidth: 1,
    borderColor: '#CBDAE0',
    paddingTop: s(36),
    paddingBottom: s(23),
    paddingHorizontal: s(23),
  },

  joinSessionDevices: {
    gap: 24,
  },
});
