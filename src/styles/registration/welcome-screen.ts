import { StyleSheet } from 'react-native';
import { custom } from '../globalStyles';
import { scale} from 'react-native-size-matters/extend';

const styles = StyleSheet.create({
  container: {
    backgroundColor: custom.primary,
  },

  logoContainer: {
    marginTop: scale(106),
    marginBottom: scale(106),
    backgroundColor: custom.primary,
    alignItems: 'center',
  },

  bottomContainer: {
    backgroundColor: custom.card,
    borderTopLeftRadius:20 ,
    borderTopRightRadius: 20 ,
    alignItems: 'center',
  },

  textContainer: {
    marginTop: scale(104),
    alignItems: 'center'
  },

  programTitle: {
    fontSize:28,
    color: '#2B353A',
    lineHeight: 33.,
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center',

  },

  programSubtitle: {
    fontSize: 16,
    color: '#2B353A',
    lineHeight:22.4,
    textAlign: 'center',
    fontFamily: "Quicksand-SemiBold",
    marginTop: scale(16),
  },

  buttonContainer: {
    marginTop: scale(137), 
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
    lineHeight: 25.2,
    fontSize: 18,
    fontFamily: 'Quicksand-SemiBold',
  },

  loginButton: {
    borderRadius:8,
    backgroundColor:custom.card,
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
    color: '#2B353A',
    lineHeight: 25.2,
    fontSize: 18,
    fontFamily: "Quicksand-SemiBold",

  },
  line:{
    height:scale(1),
    backgroundColor:"#E1E8EB",
    marginTop: scale(16),
    width:scale(85),
  }
});

export default styles;