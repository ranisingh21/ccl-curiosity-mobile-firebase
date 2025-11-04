import { StyleSheet } from "react-native";
import { CustomStyle } from "../../styles/CustomStyle"; 
import { scale} from "react-native-size-matters/extend";

export default StyleSheet.create({
  card: {
    backgroundColor: CustomStyle.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: scale(20),
  },

  headerContainer: {
    flexDirection: "row",
    marginTop: scale(69),
    marginBottom: scale(20),
  },

  iconWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: scale(28),
    aspectRatio: 1,
    borderRadius: 6,
    marginHorizontal:scale(9),
    marginTop:scale(5),
  },

  iconImage: {
    width: "100%",
    height: "100%",
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    color: CustomStyle. titlecolor,
    lineHeight: 33.6,
  },

  contentContainer: {
    margin: "auto",
    width:scale(294),
  },

  bannerBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    paddingTop: scale(12),
    paddingBottom: scale(12),
    paddingLeft: scale(12),
    paddingRight: scale(30),
    gap: 16,
  },

  bannerIconBox: {
    width: scale(28),
    aspectRatio: 1,
    paddingTop: scale(4),
    paddingBottom: scale(5),
    paddingLeft: scale(4),
    paddingRight: scale(4),
  },

  bannerMessage: {
    color: CustomStyle. textfontcolor,
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
    fontFamily: "Noto Sans Devanagari",
    lineHeight: 19.6,
    textAlign: "center",
  },

  bannerArrowIcon: {
    width: scale(26),
    paddingLeft: scale(1),
    paddingRight: scale(3),
    justifyContent: "center",
    alignItems: "center",
    marginRight: scale(20),
  },

  inputLabel: {
    marginTop: scale(50),
    fontWeight: "700",
    marginLeft: scale(10),
    fontSize: 16,
    fontStyle: "normal",
    lineHeight: 19.2,
    fontFamily: "Quicksand",
  },

  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: scale(40),
    marginTop: scale(16),
    gap: 9,
  },

  otpInputBox: {
    width: scale(37),
    aspectRatio:37/55,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  nextButtonWrapper: {
    marginTop: scale(300),
    marginBottom: scale(106),
  },
});
