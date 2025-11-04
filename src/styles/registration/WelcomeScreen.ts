import { StyleSheet } from 'react-native';
import { CustomStyle } from "../../styles/CustomStyle"; 
import { scale, verticalScale,moderateScale} from 'react-native-size-matters/extend';
console.log(CustomStyle.factor)


const styles = StyleSheet.create({
  container: {
    backgroundColor: CustomStyle.primary,
  },
  
  logoContainer: {
    marginTop: scale(106),
    marginBottom: scale(106),
    backgroundColor: CustomStyle.primary,
    alignItems: 'center',
  },

  bottomContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius:20 ,
    borderTopRightRadius: 20 ,
    alignItems: 'center',
  },

  textContainer: {
    marginTop: scale(104),
  },

  // programTitle: {
  //   fontSize: 28,
  //   // fontWeight: '700',
  //   color: '#2B353A',
  //   lineHeight: 33.6,
  //   fontFamily: 'Quacksand-bold',
  //   textAlign: 'center',
  //   // fontStyle: 'normal',
  // },


  programTitle: {
    fontSize: moderateScale(28,CustomStyle.factor),
    // fontWeight: '700',
    // color: '#2B353A',
    lineHeight: scale(33.6),
    fontFamily: 'Quicksand',
    textAlign: 'center',
    color:'red',

  }, 
  programSubtitle: {
    fontSize: 16,
    color: '#2B353A',
    fontWeight: '600',
    lineHeight: 22.4,
    textAlign: 'center',
    fontFamily: 'Quicksand',
    marginTop: scale(16),
    fontStyle: 'normal',
  },

  buttonContainer: {
    marginTop: scale(153), 
    marginBottom:scale(104)
  },

  registerButton: {
    borderRadius: 8,
    backgroundColor: '#189BD7',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 1,
  },

  registerText: {
    paddingTop: scale(17),
    paddingBottom: scale(14),
    paddingLeft: scale(111),
    paddingRight: scale(111),
    fontStyle: 'normal',
    color: '#F6F6F6',
    fontWeight: '600',
    lineHeight:25.2,
    fontSize: 18,
    fontFamily: 'Quicksand',
  },


  loginButton: {
    borderRadius:8,
    backgroundColor: '#FFF',
    marginTop: scale(9),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 1,
    borderWidth: 2,
    borderColor: '#189BD7'
  },

  loginText: {
    paddingTop: scale(17),
    paddingBottom: scale(14),
    paddingLeft: scale(111),
    paddingRight: scale(111),
    fontStyle: 'normal',
    color: 'black',
    fontWeight: '600',
    lineHeight: scale(25.2),
    fontSize: 18,
    fontFamily: "Quicksand",

  },
 
});

export default styles;

