import { StyleSheet } from "react-native";
import {custom} from "./custom";
import { scale} from "react-native-size-matters/extend";

export default StyleSheet.create({
  card: {
    backgroundColor: custom.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: scale(20),
  },

  headerBox: {
    flexDirection: "row",
    marginTop: scale(69),
    marginBottom: scale(20),
  },
  
  headerIconWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: scale(28),
    aspectRatio: 1,
    borderRadius: 8,
    marginHorizontal:scale(9),
    marginTop:scale(5),
  },

  headerIcon: {
    width: "100%",
    height: "100%",
  },

  headerTitle: {
    fontSize: 28,
    textAlign: "center",
    color: custom.titlecolor,
    fontFamily:"Quacksand-Bold",
    lineHeight: 33.6,
  },

  contentContainer: {
    margin: "auto",
  },

  bannerBox: {
    backgroundColor: "#F6F6F6",
    paddingTop: scale(12),
    paddingBottom: scale(10),
    paddingLeft: scale(12),
    paddingRight: scale(20),
    borderRadius: 6,
    marginBottom: scale(39),
   
  },

  bannerimgetextbox:{
    flexDirection:"row",
    gap:8,
  },

  bannerRowTop: {
    flexDirection: "row",
  },

  bannerIconWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: scale(28),
    aspectRatio: 1,
    paddingVertical: scale(4),
    paddingHorizontal: scale(3),
    borderRadius: 6,
  },

  bannerIcon: {
    width: "100%",
    height: "100%",
  },

  bannerTextTop: {
    fontSize: 14,
    fontFamily: "NotoSansDevanagari-SemiBold",
    color: custom.textfontcolor,
    lineHeight: 19.6,
  },

  bannerRowBottom: {
    flexDirection: "column",
  },

   bannerRowBottomBox: {
    flexDirection: "row",
    gap: 8,
  },

  bannerTextBottom: {
    fontSize: 14,
    fontFamily: "NotoSansDevanagari-SemiBold",
    color: custom.textfontcolor,
    lineHeight: 19.6,
  },

  bannerArrowWrapper: {
    width: scale(22),
    aspectRatio: 1,
  },

  bannerArrow: {
    width: "100%",
    height: "100%",
  },

  fieldLabel: {
    fontSize: 16,
    fontFamily: "Quicksand-Bold",
    color: custom.titlecolor,
    paddingHorizontal: scale(10),
    lineHeight: 22.4,
  },

  fieldValue: {
    fontSize: 16,
    fontFamily: "Quicksand-Medium",
    color: "#485860",
    lineHeight: 22.4,
  },

  fieldBox: {
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 8,
    justifyContent: "space-between",
    marginTop: scale(4),
    marginBottom: scale(24),
    paddingHorizontal: scale(12),
    paddingTop: scale(12),
    paddingBottom: scale(8),
  },

  fieldBoxLast: {
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 8,
    justifyContent: "space-between",
    marginTop: scale(4),
    paddingHorizontal: scale(12),
    paddingTop: scale(12),
    paddingBottom: scale(8),
    
  },

  dropdownIconWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: scale(28),
    aspectRatio: 1,
  },

  dropdownIcon: {
    width: "100%",
    height: "100%",
  },

  nextButtonWrapper: {
    marginTop: scale(120),
    marginBottom: scale(106),
  },
});











































