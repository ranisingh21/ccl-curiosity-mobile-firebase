    
// import { StyleSheet } from "react-native";
// import { scale} from "react-native-size-matters/extend";
// const styles = StyleSheet.create({

//   containerBox: {
//     alignItems: "center",
//   },
  
// logoImgContainer:{
//   width:scale(80),
//   aspectRatio:1
// },
// logo:{
//   width:"100%",
//   height:"100%",
// },

//   brandTop: {
//     color: "#FFF",
//     fontSize: 20,
//     textAlign: "center",
//     fontStyle: "normal",
//     marginTop: scale(20),
//     lineHeight:24,
//     fontWeight: "600",
//   },

//   brandBottom: {
//     color: "#FFF",
//     textAlign: "center",
//     fontFamily: "Quicksand",
//     fontSize: 16,
//     fontStyle: "normal",
//     fontWeight: "500",
//     lineHeight: 22.4
//   },
// });

// export default styles;








import { StyleSheet } from "react-native";
import { scale} from "react-native-size-matters/extend";
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
  marginTop: scale(20),
  lineHeight:24,
  fontFamily: "Quicksand-SemiBold",
  fontStyle:"normal"
},

brandBottom: {
  color: "#FFF",
  textAlign: "center",
  fontSize: 16,
  lineHeight: 22.4,
  fontFamily: "Quicksand-Regular",
  fontStyle:"normal"
},
});

export default styles;














