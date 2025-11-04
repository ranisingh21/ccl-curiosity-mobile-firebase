import { StyleSheet } from 'react-native';
import { CustomStyle } from "../../styles/CustomStyle"; 

import { scale, moderateScale } from 'react-native-size-matters/extend';

const styles = StyleSheet.create({
  screenBox: {
    backgroundColor: CustomStyle.BLUE,
  },

  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(328),
    margin: 'auto',
    width: scale(128),
    aspectRatio: 16 / 11,
  },

  imageBox: {
    width: scale(119),
    aspectRatio: 119 / 79,
  },

  textBlock: {
    alignItems: 'center',
    marginTop: scale(59),
  },

  thanksBox: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Quicksand',
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 22.4,
    flexShrink: 0,
  },

  name: {
    marginTop: scale(25),
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Quicksand',
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 24,
    flexShrink: 0,
  },

  subLine: {
    marginTop: scale(5),
    color: CustomStyle.WHITE,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Quicksand',
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 19.6,
  },

  registrationCheckButton: {
    alignItems: 'center',
    marginTop: scale(77),
  },

  CheckButtonBox: {
    borderRadius: 7,
    backgroundColor: CustomStyle.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: scale(15),
    paddingBottom: scale(16),
    paddingHorizontal: scale(60),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 3,
    elevation: 3,
    marginBottom: scale(216),
    flexDirection: 'row',
    gap: 8,
  },

  CheckButtonBoxText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Quicksand',
    fontStyle: 'normal',
    lineHeight:22.4,
  },

  arrow: {
    color: CustomStyle.BLUE,
    width: scale(24),
    height: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '600',
    alignSelf: 'center',
  },
});

export default styles;
