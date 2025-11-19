import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoBanner from './LogoBanner';
import styles from '../../styles/registration/welcome-screen';

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoBanner bottomFontFamily="Quicksand-SemiBold" />
      </View>

  <View style={styles.bottomContainer}>
    <View style={styles.textContainer}>
      <Text style={styles.programTitle}>Curiosity Program</Text>
      <Text style={styles.programSubtitle}>Let's Get in!</Text>
      <View style={styles.line}>
        <Image source={require('../../assets/Images/Line.png')} />
      </View>
    </View>

    <View style={styles.buttonContainer}>
      {/* Register button → start from step 2 */}
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() =>
          navigation.navigate('RegSelectSchoolScreen', { startStep: 2 })
        }
      >
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>

      {/* Login button → start from step 1 */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() =>
          navigation.navigate('RegSelectSchoolScreen', { startStep: 1 })
        }
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  </View>
</View>
  );
};

export default WelcomeScreen;
















// import React from 'react';
// import { View, Text,Image, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import LogoBanner from './LogoBanner';
// import styles from '../../styles/registration/welcome-screen';

// const WelcomeScreen: React.FC = () => {
//   const navigation = useNavigation<any>();

//   return (
//       <View style={styles.container}>
//         <View style={styles.logoContainer}>
//           <LogoBanner  bottomFontFamily="Quicksand-SemiBold" />
//         </View>
//         <View style={styles.bottomContainer}>
//           <View style={styles.textContainer}>
//             <Text style={styles.programTitle}>Curiosity Program</Text>
//             <Text style={styles.programSubtitle}>Let's Get in!</Text>
//              <View  style={styles.line}>
//             <Image source={require("../../assets/Images/Line.png")}    />
//         </View>
//           </View>

//       <View style={styles.buttonContainer}>
//        <TouchableOpacity
//         style={styles.registerButton}
//         onPress={() => navigation.navigate("RegSelectSchoolScreen")}
//       >
//         <Text style={styles.registerText}>Register</Text>
//       </TouchableOpacity>


//         <TouchableOpacity style={styles.loginButton}>
//           <Text style={styles.loginText}>Login</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   </View>   
//   );
// };

// export default WelcomeScreen