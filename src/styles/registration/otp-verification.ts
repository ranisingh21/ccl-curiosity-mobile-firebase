import { StyleSheet } from "react-native";
import { custom } from '../globalStyles';
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
    marginBottom: scale(61),
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
    gap:4,
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
    paddingHorizontal: scale(12),
    paddingTop: scale(12),
    paddingBottom: scale(14),
    color:custom.textfontcolor,
    marginTop:scale(4),

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
  },

  nextButtonWrapper: {
    marginTop: scale(352),
    marginBottom: scale(100),
  },
});
