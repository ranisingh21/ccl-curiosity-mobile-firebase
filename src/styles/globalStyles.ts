import { StyleSheet } from "react-native";
import {
  scale,
  verticalScale,
} from "react-native-size-matters/extend";

export const custom = {
  brand: "#11A1DF",
  brandDark: "#1098d6",
  primary: "#1AA7E8",
  bg: "#F4F6F8",
  card: "#FFFFFF",
  text: "#111827",
  muted: "#6B7280",
  line: "#E5E7EB",
  banner: "#F1F5F9",
  BLUE: '#1AA7E8',
  WHITE : '#ffffff',
  backgroundColor: "#f2f2f2",
  titlecolor:"#2B353A",
  textfontcolor:"#485860",

  bgSoft: "White",
  // text: '#2B353A',
  subText: "#6C7177",
  cardBg: "#FFFFFF",
  divider: "#D8DEE4",
  // primary: '#2F7CF6',
  joinBlue: "#37A9FF",
  headerColor: "#E1E8EB",


};

import { PixelRatio } from "react-native";
console.log("Font scale:", PixelRatio.getFontScale());

export const globalStyles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: custom.headerColor },

  bodyContainer: {
    backgroundColor: "whitesmoke",
    paddingHorizontal: scale(19),
    gap: 60,
  },

  sectionTitle: {
    fontSize: 18,
    // fontWeight: '700',
    color: "#2B353A",
    marginBottom: verticalScale(10),
    marginTop: verticalScale(4),
    marginLeft: verticalScale(13),
    fontFamily: "Quicksand-Bold",
  },

  allCardBox: {
    marginTop: scale(60),
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: scale(8),
    borderWidth: 1,
    borderColor: "#CBDAE0",
    paddingTop: scale(36),
    paddingBottom: scale(23),
    paddingHorizontal:scale(23),
  },

  joinSessionDevices: {
    gap: 24,
  },
});























// import { StyleSheet } from 'react-native';
// import {
//   scale as s,
//   moderateScale as ms,
//   verticalScale as vs,
// } from 'react-native-size-matters/extend';

// export const COLORS = {
//   bgSoft: 'White',
//   text: '#2B353A',
//   subText: '#6C7177',
//   cardBg: '#FFFFFF',
//   divider: '#D8DEE4',
//   primary: '#2F7CF6',
//   joinBlue: '#37A9FF',
//   headerColor: '#E1E8EB',
// };

// export const factor = 1;

// import { PixelRatio } from 'react-native';
// console.log('Font scale:', PixelRatio.getFontScale());

// export const globalStyles = StyleSheet.create({
//   safe: { flex: 1, backgroundColor: COLORS.headerColor },

//   bodyContainer: {
//     backgroundColor: 'whitesmoke',
//     paddingHorizontal: s(19),
//     gap: 60,
//   },

//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#2B353A',
//     marginBottom: vs(10),
//     marginTop: vs(4),
//     marginLeft: vs(13),
//   },

//   allCardBox: {
//     marginTop: s(60),
//   },
//   card: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: s(8),
//     borderWidth: 1,
//     borderColor: '#CBDAE0',
//     paddingTop: s(36),
//     paddingBottom: s(23),
//     paddingHorizontal: s(23),
//   },

//   joinSessionDevices: {
//     gap: 24,
//   },
// });
