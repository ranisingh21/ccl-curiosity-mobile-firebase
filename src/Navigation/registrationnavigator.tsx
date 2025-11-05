import React from "react";
  import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
  import { createNativeStackNavigator } from "@react-navigation/native-stack";

  import IntroScreen from "../components/registration/IntroScreen";
  import WelcomeScreen from "../components/registration/WelcomeScreen";
  import RegSelectSchoolScreen from "../screens/RegSelectSchoolScreen";
  import RegSuccess from "../components/registration/RegSuccess";

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
           <Stack.Screen name="navigation" component={GoToMainTabsBridge} />  
        </Stack.Navigator>
     
    );
  }

  function GoToMainTabsBridge({ navigation }: any) {
    useFocusEffect(
      React.useCallback(() => {
        // move from Registration (child) to MainTabs (in the root)
        navigation.getParent()?.reset({
          index: 0,
          routes: [{ name: "MainTabs" }],
        });
      }, [navigation])
    );
  
    // nothing to render; it just redirects
    return null;
  }