import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabsNavigator from "./sessionTabNavigator";

import IntroScreen from "../Shanti/registration/IntroScreen";
import WelcomeScreen from "../Shanti/registration/WelcomeScreen";
import RegSelectSchoolScreen from "../screens/RegSelectSchoolScreen";
import RegSuccess from "../Shanti/registration/RegSuccess";
import AttendanceForm from "../Shanti/tasklist/AttendanceForm";
import UploadMedia from "../Shanti/tasklist/UploadMedia";
import Worksheet from "../Shanti/tasklist/Worksheet";
import ChallengeQues from "../Shanti/tasklist/ChallengeQues";

import SessionDetail from "../screens/MainSessionDetail";

import { LocationDataProvider } from "../api/api";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <LocationDataProvider>
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
        <Stack.Screen name="AttendanceForm" component={AttendanceForm} />
        <Stack.Screen name="UploadMedia" component={UploadMedia} />
        <Stack.Screen name="Worksheet" component={Worksheet} />
        <Stack.Screen name="ChallengeQues" component={ChallengeQues} />
      </Stack.Navigator>
    </LocationDataProvider>
  );
}
