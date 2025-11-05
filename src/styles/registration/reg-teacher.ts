import { StyleSheet } from "react-native";
import { custom } from "./custom";
import { scale} from "react-native-size-matters/extend";

export default StyleSheet.create({
  card: {
    backgroundColor: custom.WHITE,
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
    textAlign: "center",
    color:  custom.titlecolor,
    lineHeight: 33.6,
    fontFamily:"Quicksand-Bold",
  },

  contentContainer: {
    margin: "auto",
    width:scale(294),
  },

  fieldLabel: {
    fontSize: 16,
    fontFamily: "Quicksand-Bold",
    color:  custom.titlecolor,
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
    color:custom.textfontcolor,
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
    color: custom.textfontcolor,
  },
  fieldValue: {
    fontSize: 16,
    fontFamily: "Quicksand-Medium",
    color: custom.titlecolor,
    lineHeight: 22.4,
  },
  
  textbox:{
    fontFamily:"Quicksand",
    fontSize:14,
    fontStyle:"normal",
    fontWeight:"500",
    color: custom.textfontcolor,
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
  color:  custom.titlecolor,
  fontFamily: "Quicksand-Bold",
  fontSize: 14,
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight:19.6,
  textDecorationLine: "underline",
},

 textLink2: {
  color: custom.textfontcolor,
  fontFamily: "Quicksand-Medium",
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
