  // Shanti 
  // import React from "react";
  // import { NavigationContainer } from "@react-navigation/native";
  // import { createNativeStackNavigator } from "@react-navigation/native-stack";

  // import IntroScreen from "./src/screens/registration/IntroScreen";
  // import WelcomeScreen from "./src/screens/registration/WelcomeScreen";
  // import RegSelectSchoolScreen from "./src/screens/registration/RegSelectSchoolScreen";
  // import RegSuccess from "./src/screens/registration/RegSuccess";
  // import Navigation from "./src/screens/sessionList/navigation";

  // const Stack = createNativeStackNavigator();

  // export default function App() {
  //   return (
  //     <NavigationContainer>
  //       <Stack.Navigator
  //         screenOptions={{ headerShown: false }}
  //         initialRouteName="IntroScreen"
  //       >
  //         <Stack.Screen name="IntroScreen" component={IntroScreen} />
  //         <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
  //         <Stack.Screen
  //           name="RegSelectSchoolScreen"
  //           component={RegSelectSchoolScreen}
  //         />
  //         <Stack.Screen name="RegSuccess" component={RegSuccess} />
  //         <Stack.Screen name="navigation" component={Navigation} />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   );
  // }




// Pooja 
// import { View, ScrollView } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { globalStyles } from './src/styles/globalStyles';

// import SessionHeader from './src/screens/sessionDetails/SessionHeader'; 
// import SessionDetailCard from './src/screens/sessionDetails/SessionDetailCard';
// import JoinSessionDesktop from './src/screens/sessionDetails/JoinSessionDesktop';
// import JoinSessionMobile from './src/screens/sessionDetails/JoinSessionMobile';
// import TaskListCard from './src/screens/sessionDetails/TaskListCard';
// import SessionFooter from './src/screens/sessionDetails/SessionFooter';

// const App = () => {
//   return (
//     <ScrollView>
//        <SafeAreaView style={globalStyles.safe}> 
//          <SessionHeader /> 

//         <View style={globalStyles.bodyContainer}> 
//            <SessionDetailCard /> 
//            <View style={globalStyles.joinSessionDevices}> 
//             <JoinSessionDesktop /> 
//              <JoinSessionMobile /> 
//            </View> 
//            <TaskListCard /> 
//          </View> 
//         <SessionFooter />
//        </SafeAreaView> 
//      </ScrollView> 
//   );
// };

// export default App;


// Mahima
// App.tsx
// import React from 'react';
// import { View, ScrollView } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { globalStyles } from './src/styles/globalStyles';

// import SessionHeader from './src/screens/sessionDetails/SessionHeader';
// import SessionDetailCard from './src/screens/sessionDetails/SessionDetailCard';
// import JoinSessionDesktop from './src/screens/sessionDetails/JoinSessionDesktop';
// import JoinSessionMobile from './src/screens/sessionDetails/JoinSessionMobile';
// import TaskListCard from './src/screens/sessionDetails/TaskListCard';
// import SessionFooter from './src/screens/sessionDetails/SessionFooter';

// export default function App() {
//   return (
//     <ScrollView>
//       <SafeAreaView style={globalStyles.safe}>
//         <SessionHeader />

//         <View style={globalStyles.bodyContainer}>
//            <SessionDetailCard />
//            <View style={globalStyles.joinSessionDevices}>
//              <JoinSessionDesktop />
//              <JoinSessionMobile />
//            </View>
//            <TaskListCard />
//          </View>
//          <SessionFooter /> 
//        </SafeAreaView>
//      </ScrollView>
//   );
// };



// App.tsx
// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/Navigation/Navigation";

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

// App.tsx
// import React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { Text } from 'react-native';  // Import the Text component from React Native
// import AppNavigator from './src/screens/navigation';
// import { SIZE_MATTERS_BASE_WIDTH, SIZE_MATTERS_BASE_HEIGHT } from '@env';  // Import environment variables

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       { Display the width and height values }
//       <Text>
//         Width: {SIZE_MATTERS_BASE_WIDTH}, Height: {SIZE_MATTERS_BASE_HEIGHT}
//       </Text>
//     </SafeAreaProvider>
//   );
// }



// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.regular}>Hello with Quicksand Regular!</Text>
//       <Text style={styles.bold}>Hello with Quicksand Bold!</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   regular: {
//     fontFamily: 'Quicksand',
//     fontSize: 25,
//   },
//   bold: {
//     // fontFamily: 'Quicksand-Bold',
//     fontSize: 22,
//   },
// });

// export default App;





// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { COLORS } from './src/styles/globalStyles';

// const App = () => (
//   <View style={styles.container}>
//     <Text style={styles.text}>This is Quicksand Regular</Text>
//     <Text style={styles.text}>1 रंगीन प्रिंट – संकेतक pH चार्ट</Text>
//     <Text style={styles.text}>This is Quicksand text</Text>
//     <Text style={styles.bold}>1 रंगीन प्रिंट – संकेतक pH चार्ट</Text>
//     <Text style={styles.text}>Diwali Themed</Text>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontFamily: 'Quicksand',
//     // fontSize: 16,

//      fontSize: 28,
//         fontWeight: '700',
//         color: COLORS.text,
//         marginBottom: (10),
//         paddingLeft: (10),
//         // fontFamily: 'Quicksand',
//         lineHeight: 20,
//   },
//   bold: {
//     fontFamily: 'Quicksand-Bold',
//     fontSize: 16,
//   },
// });

// export default App;
