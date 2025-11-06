import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters/extend';

export const styles = StyleSheet.create({
  bottomBarWrapper: {
    left: 0,
    right: 0,
    bottom: scale(12),
    paddingHorizontal: scale(16),
    backgroundColor: '#0EA5E9',
  },
  bottomBar: {
    paddingVertical: scale(12),
    paddingHorizontal: scale(14),
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(12),
  },
  datePill: {
    width: scale(64),
    aspectRatio: 1,
    borderRadius: scale(14),
    backgroundColor: '#2B82FF12',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateBig: {
    fontSize: 22,
    fontWeight: '800',
    color: 'white',
    lineHeight: scale(26),
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
    marginBottom: scale(2),
    marginTop: scale(14),
  },
  sessionWhen: {
    fontSize:16,
    fontWeight: '700',
    color: 'white',
  },
  joinBtn: {
    backgroundColor: 'white',
    paddingHorizontal: scale(22),
    paddingVertical: scale(10),
    minHeight: scale(40),
    borderRadius: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  joinText: {
    color: '#0EA5E9',
    fontWeight: '800',
    letterSpacing: scale(0.5),
    fontSize: 14,
  },
});
