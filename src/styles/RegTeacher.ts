import { StyleSheet } from "react-native";
import { CustomStyle } from "./CustomStyle";
import { scale} from "react-native-size-matters/extend";

export default StyleSheet.create({
  card: {
    backgroundColor: CustomStyle.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: scale(20),
    borderRadius: 20,
  },

  headerBox: {
    flexDirection: "row",
    marginTop: scale(69),
    gap: scale(7),
    marginBottom: scale(62),
  },

  headerIconWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: scale(28),
    aspectRatio: 1,
    borderRadius: 6,
    marginHorizontal:scale(9),
    marginTop:scale(5),
  },

  headerIcon: {
    width: "100%",
    height: "100%",
  },

  headerTitle: {
    fontSize: 28,
    fontStyle:"normal",
    fontWeight: "700",
    textAlign: "center",
    color:  CustomStyle.titlecolor,
    lineHeight: 33.6,
  },

  contentContainer: {
    margin: "auto",
    width:scale(294),
  },

  fieldLabel: {
    fontSize: 16,
    fontFamily: "Quicksand",
    fontWeight: "700",
    color:  CustomStyle.titlecolor,
    paddingHorizontal: scale(10),
    lineHeight: 22.4,

  },
  fieldBox: {
    borderWidth: scale(1),
    flexDirection: "row",
    borderRadius: 8,
    display:"flex",
    alignItems:"center",
    marginBottom: scale(32),
    paddingHorizontal: scale(12),
    paddingTop: scale(12),
    paddingBottom: scale(14),
    color:CustomStyle.textfontcolor,
  },

   fieldBox2: {
    borderWidth: scale(1),
    flexDirection: "row",
    borderRadius: 8,
    display:"flex",
    alignItems:"center",
    justifyContent: "space-between",
    paddingHorizontal: scale(12),
    paddingTop: scale(12),
    paddingBottom: scale(14),
    color: CustomStyle.textfontcolor,
  },
  fieldValue: {
    fontSize: 16,
    fontFamily: "Quicksand",
    fontStyle:"normal",
    fontWeight: "600",
    color: CustomStyle.titlecolor,
    lineHeight: 22.4,
  },
  
  textbox:{
    fontFamily:"Quicksand",
    fontSize:14,
    fontStyle:"normal",
    fontWeight:"500",
    color: CustomStyle.textfontcolor,
    paddingLeft:scale(8),
    lineHeight:19.6,
    marginBottom: scale(32),
  },

  fieldBoxLast: {
    borderWidth: scale(1),
    flexDirection: "row",
    borderRadius: 8,
    justifyContent: "space-between",
    paddingHorizontal: scale(12),
    paddingVertical: scale(12),
  },
  textlinkbox:{
    flexDirection:"row",
    display:"flex",
    alignItems:"center",
    justifyContent: "space-between",
    padding:scale(8),
  },

  textLink: {
  color:  CustomStyle.titlecolor,
  fontFamily: "Quicksand",
  fontSize: 14,
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight:19.6,
  textDecorationLine: "underline",
},

 textLink2: {
  color: CustomStyle.textfontcolor,
  fontFamily: "Quicksand",
  fontSize: 14,
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight:19.6,

},
  nextButtonWrapper: {
    marginTop: scale(113),
    marginBottom: scale(100),
  },
});
