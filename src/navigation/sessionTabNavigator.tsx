// import React from "react";
// import { View } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

// import Header from "../components/common/AppHeader";
// import SessionsScreen from "../screens/sessionList";
// import SessionDetail from "../screens/MainSessionDetail";
// import ProfileScreen from "../screens/profile";
// import type { Session } from "../components/sessionList/SessionRow";
// import { scale } from 'react-native-size-matters/extend';

// import CustomFooterTabBar from "../components/common/CustomFooterBar";

// type SessionsStackParamList = {
//   SessionsList: undefined;
//   SessionDetail: { session: Session };
// };

// const SessionsStackNav = createNativeStackNavigator<SessionsStackParamList>();
// function SessionsStack() {
//   return (
//     <SessionsStackNav.Navigator screenOptions={{ headerShown: false }}>
//       <SessionsStackNav.Screen name="SessionsList" component={SessionsListWithHeader} />
//       <SessionsStackNav.Screen name="SessionDetail" component={SessionDetail} />
//     </SessionsStackNav.Navigator>
//   );
// }

// function SessionsListWithHeader({ navigation }: any) {
//   return (
//     <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
//       <Header title="Session List" />
//       <View style={{ flex: 1, paddingHorizontal: scale(16) }}>
//         <SessionsScreen
//           onOpenSession={(session: Session) =>
//             navigation.navigate("SessionDetail", { session })
//           } 
//         />
//       </View>
//     </View>
//   );
// }

// function ProfileWithHeader() {
//   return (
//     <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
//       <Header title="My KGBV Profile" />
//       <View style={{ flex: 1, paddingHorizontal: scale(16) }}>
//         <ProfileScreen />
//       </View>
//     </View>
//   );
// }

// type TabParamList = { sessions: undefined; profile: undefined };
// const Tab = createBottomTabNavigator<TabParamList>();

// export default function MainTabsNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={{ headerShown: false }}
//       tabBar={(props) => <CustomFooterTabBar {...props} />} 
//     >
//       <Tab.Screen
//         name="sessions"
//         component={SessionsStack}
//         options={({ route }) => ({
//           tabBarStyle: shouldHideFooter(route) ? { display: "none" } : undefined,
//         })}
//       />
//       <Tab.Screen name="profile" component={ProfileWithHeader} />
//     </Tab.Navigator>
//   );
// }

// function shouldHideFooter(route: any) {
//   const child = getFocusedRouteNameFromRoute(route);
//   return child === "SessionDetail";
// }


// src/navigation/sessionTabNavigator.tsx
import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { scale } from 'react-native-size-matters/extend';

import Header from '../Shanti/common/AppHeader';
import SessionsScreen from '../screens/sessionList';
import ProfileScreen from '../screens/profile';
import CustomFooterTabBar from '../Shanti/common/CustomFooterBar';

// If you have a Session type, import it. If not, you can use `any`.
import type { Session } from '../Shanti/sessionList/SessionRow';

type TabParamList = { sessions: undefined; profile: undefined };
const Tab = createBottomTabNavigator<TabParamList>();

// Wrap Sessions list with header and handle "open detail" by navigating to ROOT stack
function SessionsWithHeader() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <Header title="Session List" />
      <View style={{ flex: 1, paddingHorizontal: scale(16) }}>
        <SessionsScreen/>
      </View>
    </View>
  );
}

function ProfileWithHeader() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <Header title="My KGBV Profile" />
      <View style={{ flex: 1, paddingHorizontal: scale(16) }}>
        <ProfileScreen />
      </View>
    </View>
  );
}

const MainTabsNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomFooterTabBar {...props} />}
    >
      <Tab.Screen name="sessions" component={SessionsWithHeader} />
      <Tab.Screen name="profile" component={ProfileWithHeader} />
    </Tab.Navigator>
  );
};

export default MainTabsNavigator;
