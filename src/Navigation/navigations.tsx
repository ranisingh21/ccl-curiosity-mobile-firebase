import React from "react";
  import { createNativeStackNavigator } from "@react-navigation/native-stack";
  import MainTabsNavigator from "./sessionTabNavigator";

  import IntroScreen from "../components/registration/IntroScreen";
  import WelcomeScreen from "../components/registration/WelcomeScreen";
  import RegSelectSchoolScreen from "../components/registration/RegSelectSchoolScreen";
  import RegSuccess from "../components/registration/RegSuccess";
  import SessionDetail from '../screens/MainSessionDetail';

  const Stack = createNativeStackNavigator();

  export default function App() {
    return (
      
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
           <Stack.Screen name="MainTabs" component={MainTabsNavigator} />
           <Stack.Screen name="SessionDetail" component={SessionDetail} />
           
        </Stack.Navigator>
     
    );
  }
