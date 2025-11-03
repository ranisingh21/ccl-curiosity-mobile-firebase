import { StyleSheet } from 'react-native';
import {
  scale as s,
  moderateScale as ms,
} from 'react-native-size-matters/extend';
import {factor } from '../globalStyles';

export const styles = StyleSheet.create({
  bottomBarWrapper: {
    left: 0,
    right: 0,
    bottom: s(12),
    paddingHorizontal: s(16),
    backgroundColor: '#0EA5E9',
  },
  bottomBar: {
    paddingVertical: s(12),
    paddingHorizontal: s(14),
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(12),
  },
  datePill: {
    width: s(64),
    aspectRatio: 1,
    borderRadius: s(14),
    backgroundColor: '#2B82FF12',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateBig: {
    fontSize: 22,
    fontWeight: '800',
    color: 'white',
    lineHeight: s(26),
  },
  dateSmall: {
    fontSize:12,
    color: 'white',
  },
  sessionInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  sessionLabel: {
    fontSize:12,
    color: 'white',
    marginBottom: s(2),
    marginTop: s(14),
  },
  sessionWhen: {
    fontSize:16,
    fontWeight: '700',
    color: 'white',
  },
  joinBtn: {
    backgroundColor: 'white',
    paddingHorizontal: s(22),
    paddingVertical: s(10),
    minHeight: s(40),
    borderRadius: s(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  joinText: {
    color: '#0EA5E9',
    fontWeight: '800',
    letterSpacing: s(0.5),
    fontSize: 14,
  },
});
