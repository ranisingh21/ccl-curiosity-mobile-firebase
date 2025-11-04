    
import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters/extend";
// import { CustomStyle } from "../../styles/CustomStyle"; 

const styles = StyleSheet.create({

  containerBox: {
    alignItems: "center",
  },
  
logoImgContainer:{
  width:scale(80),
  aspectRatio:1
},
logo:{
  width:"100%",
  height:"100%",
},

  brandTop: {
    color: "#FFF",
    fontSize: 20,
    textAlign: "center",
    fontStyle: "normal",
    marginTop: scale(20),
    lineHeight:24,
    fontWeight: "600",
  },

  brandBottom: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Quicksand",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 22.4
  },
});

export default styles;

























// import { CustomStyle } from "../styles/CustomStyle";
// import { StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//   safe: {
//     flex: 1,
//     backgroundColor: CustomStyle.primary,
//   },
//   center: {
//     flex: 1,
//     marginTop: 270,
//     alignItems: "center",
//     justifyContent: "center",
//     paddingHorizontal: 24,
//   },
//   logo: {
//     width: 80,
//     height: 80,
//     marginBottom: 15,
//     borderRadius: 40,
//   },


//   brandTop: {
//     color: "#FFFFFF",
//     fontSize: 20,
//     textAlign: "center",
//     marginTop: 4,
//   },
//   brandBottom: {
//     color: "white",
//     fontSize: 17,
//     textAlign: "center",
//     fontWeight: "300",
//     marginTop: 2,
//   }
// });

// export default styles;
