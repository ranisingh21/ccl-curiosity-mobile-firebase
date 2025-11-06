import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters/extend';
import { custom } from '../globalStyles';

export const styles = StyleSheet.create({
  headerContaner: {
    paddingHorizontal: scale(19),
    paddingBottom: scale(12),
    backgroundColor: custom.headerColor,
  },

  backArrowImage: {
    fontSize: 30,
    color: custom.text,
    marginTop: scale(32),
    marginBottom: scale(25),
  },

  title: {
    fontSize: 28,
    color: custom.text,
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
    color: custom.text,
    lineHeight: 20,
    fontFamily: 'Quicksand-SemiBold',
    // fontWeight: '600',
    fontSize:14,
  },

  tabDivider: {
    color: custom.text,
    marginHorizontal: scale(1),
    fontWeight: 400,
    fontSize: 14,
  },
});
