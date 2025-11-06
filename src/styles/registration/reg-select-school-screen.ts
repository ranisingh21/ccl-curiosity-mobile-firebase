import { StyleSheet } from "react-native";
import { custom } from '../globalStyles';
import { scale} from "react-native-size-matters/extend";
export default StyleSheet.create({

  mainContainer: {
    backgroundColor: custom.primary,
    justifyContent: "center",
    paddingTop: scale(64),
    
  },

  header: {
    display: "flex", 
    flexDirection: "row",
    width: scale(281),
    margin:"auto",
    paddingBottom:scale(25),
    gap:11,

  },

  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: scale(54),
    aspectRatio: 54 / 56,
  },

  logo: {
    width: "100%",
    height: "100%",
  },

  title: {
    fontSize: 20,
    color: "#F6F6F6",
    fontFamily:"Quicksand-Bold",
    lineHeight: 24,
  },

  subTitle: {
    fontSize: 12,
    color: "#F6F6F6",
    fontFamily:"Quicksand-Regular",
    lineHeight: 16.8,
  },
  mainContainer2:{
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  }
});

