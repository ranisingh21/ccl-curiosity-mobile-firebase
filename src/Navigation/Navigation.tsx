// src/navigation/AppNavigator.tsx
import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegistrationNavigator from "./registrationnavigator";
import MainTabsNavigator from "./sessionTabNavigator";

const RootStack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
   
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {/* Start with registration */}
        <RootStack.Screen name="Registration" component={RegistrationNavigator} />
        {/* After success, switch to main tabs */}
        <RootStack.Screen name="MainTabs" component={MainTabsNavigator} />
      </RootStack.Navigator>
   
  );
}
