// // Shanti 
// // import React from "react";
// import {React, Text ,View} from "react-native";
// // import { NavigationContainer } from "@react-navigation/native";
// // import { createNativeStackNavigator } from "@react-navigation/native-stack";

// // import IntroScreen from "./src/screens/registration/IntroScreen";
// // import IntroScreen from "./src/screens/registration/IntroScreen";
// // import WelcomeScreen from "./src/screens/registration/WelcomeScreen";
// // import RegSelectSchoolScreen from "./src/screens/registration/RegSelectSchoolScreen";
// // import RegSuccess from "./src/screens/registration/RegSuccess";

// // const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     // <NavigationContainer>
//     //   <Stack.Navigator>
//         // {/* // screenOptions={{ headerShown: false }} */}
//         // {/* initialRouteName="IntroScreen" */}
//         // <IntroScreen />
//     //     {/* <Stack.Screen name="IntroScreen" component={IntroScreen} />
//     //     <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
//     //     <Stack.Screen
//     //       name="RegSelectSchoolScreen"
//     //       component={RegSelectSchoolScreen}
//     //     />
//     //     <Stack.Screen name="RegSuccess" component={RegSuccess} /> */}
//     // //   </Stack.Navigator>
//     // // </NavigationContainer>
//     <View><Text>Hello</Text></View>
//   );
// }



// Shanti 
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IntroScreen from "./src/screens/registration/IntroScreen";
import WelcomeScreen from "./src/screens/registration/WelcomeScreen";
import RegSelectSchoolScreen from "./src/screens/registration/RegSelectSchoolScreen";
import RegSuccess from "./src/screens/registration/RegSuccess";
import BlankComponent from "./src/screens/registration/BlankComponent";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="IntroScreen"
      >
        <Stack.Screen name="IntroScreen" component={IntroScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen
          name="RegSelectSchoolScreen"
          component={RegSelectSchoolScreen}
        />
        <Stack.Screen name="RegSuccess" component={RegSuccess} />
        <Stack.Screen name="BlankComponent" component={BlankComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// Pooja 
// import { View, ScrollView } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { globalStyles } from './globalStyles';
// 
// import SessionHeader from './screens/SessionHeader'; 
// import SessionDetailCard from './screens/SessionDetailCard';
// import JoinSessionDesktop from './screens/JoinSessionDesktop';
// import JoinSessionMobile from './screens/JoinSessionMobile';
// import TaskListCard from './screens/TaskListCard';
// import SessionFooter from './screens/SessionFooter';
// 
// const App = () => {
  // return (
//     // <ScrollView>
//       {/* <SafeAreaView style={globalStyles.safe}> */}
//         {/* <SessionHeader /> */}
// {/*  */}
//         {/* <View style={globalStyles.bodyContainer}> */}
//           {/* <SessionDetailCard /> */}
//           {/* <View style={globalStyles.joinSessionDevices}> */}
//             {/* <JoinSessionDesktop /> */}
//             {/* <JoinSessionMobile /> */}
//           {/* </View> */}
//           {/* <TaskListCard /> */}
//         {/* </View> */}
//         {/* <SessionFooter /> */}
//       {/* </SafeAreaView> */}
//     {/* </ScrollView> */}
  // );
// };
// 
// export default App;
// 






// Mahima
// App.tsx
// import React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import AppNavigator from './src/screens/sessionList/navigation';

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <AppNavigator />
//     </SafeAreaProvider>
//   );
// }
// 



// App.tsx
// import React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { Text } from 'react-native';  // Import the Text component from React Native
// import AppNavigator from './src/screens/navigation';
// import { SIZE_MATTERS_BASE_WIDTH, SIZE_MATTERS_BASE_HEIGHT } from '@env';  // Import environment variables

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       {/* Display the width and height values */}
//       <Text>
//         Width: {SIZE_MATTERS_BASE_WIDTH}, Height: {SIZE_MATTERS_BASE_HEIGHT}
//       </Text>
//     </SafeAreaProvider>
//   );
// }
