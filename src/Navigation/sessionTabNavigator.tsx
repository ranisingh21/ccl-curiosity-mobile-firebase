// import React from "react";
// import { View } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

// import Header from "../components/common/AppHeader";
// import SessionsScreen from "../screens/sessionList";
// import SessionDetail from "../screens/MainSessionDetail";
// import ProfileScreen from "../screens/profile";
// import AttendanceForm from "../components/tasklist/AttendanceForm"
// import UploadMedia from "../components/tasklist/UploadMedia"
// import Worksheet from "../components/tasklist/Worksheet"
// import ChallengeQues from "../components/tasklist/ChallengeQues"
// import type { Session } from "../components/sessionList/SessionRow";
// import { scale } from 'react-native-size-matters/extend';

// import CustomFooterTabBar from "../components/common/CustomFooterBar";

// type SessionsStackParamList = {
//   SessionsList: undefined;
//   SessionDetail: { session: Session };
//   AttendanceForm: undefined;
//   UploadMedia: undefined;
//   Worksheet: undefined;
//   ChallengeQues: undefined;
// };

// const SessionsStackNav = createNativeStackNavigator<SessionsStackParamList>();
// function SessionsStack() {
//   return (
//     <SessionsStackNav.Navigator screenOptions={{ headerShown: false }}>
//       <SessionsStackNav.Screen name="SessionsList" component={SessionsListWithHeader} />
//       <SessionsStackNav.Screen name="SessionDetail" component={SessionDetail} />
//       <SessionsStackNav.Screen name="AttendanceForm" component={AttendanceForm} />
//       <SessionsStackNav.Screen name="UploadMedia" component={UploadMedia} />
//       <SessionsStackNav.Screen name="Worksheet" component={Worksheet} />
//       <SessionsStackNav.Screen name="ChallengeQues" component={ChallengeQues} />
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
import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import Header from "../components/common/AppHeader";
import SessionsScreen from "../screens/sessionList";
import SessionDetail from "../screens/MainSessionDetail";
import ProfileScreen from "../screens/profile";
import AttendanceForm from "../components/tasklist/AttendanceForm";
import UploadMedia from "../components/tasklist/UploadMedia";
import Worksheet from "../components/tasklist/Worksheet";
import ChallengeQues from "../components/tasklist/ChallengeQues";
import type { Session } from "../components/sessionList/SessionRow";
import { scale } from "react-native-size-matters/extend";

import CustomFooterTabBar from "../components/common/CustomFooterBar";

type SessionsStackParamList = {
  SessionsList: undefined;
  SessionDetail: { session: Session };
};

const SessionsStackNav = createNativeStackNavigator<SessionsStackParamList>();

function SessionsStack() {
  return (
    <SessionsStackNav.Navigator screenOptions={{ headerShown: false }}>
      <SessionsStackNav.Screen
        name="SessionsList"
        component={SessionsListWithHeader}
      />
      <SessionsStackNav.Screen
        name="SessionDetail"
        component={SessionDetail}
      />
    </SessionsStackNav.Navigator>
  );
}

function SessionsListWithHeader({ navigation }: any) {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Header title="Session List" />
      <View style={{ flex: 1, paddingHorizontal: scale(16) }}>
        <SessionsScreen
          onOpenSession={(session: Session) =>
            navigation.navigate("SessionDetail", { session })
          }
        />
      </View>
    </View>
  );
}

function ProfileWithHeader() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Header title="My KGBV Profile" />
      <View style={{ flex: 1, paddingHorizontal: scale(16) }}>
        <ProfileScreen />
      </View>
    </View>
  );
}

type TabParamList = { sessions: undefined; profile: undefined };
const Tab = createBottomTabNavigator<TabParamList>();

function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomFooterTabBar {...props} />}
    >
      <Tab.Screen
        name="sessions"
        component={SessionsStack}
        options={({ route }) => ({
          tabBarStyle: shouldHideFooter(route)
            ? { display: "none" }
            : undefined,
        })}
      />
      <Tab.Screen name="profile" component={ProfileWithHeader} />
    </Tab.Navigator>
  );
}

function shouldHideFooter(route: any) {
  const child = getFocusedRouteNameFromRoute(route);
  return child === "SessionDetail";
}


const RootStack = createNativeStackNavigator();

export default function MainTabsNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="MainTabs" component={TabsNavigator} />
      <RootStack.Screen name="AttendanceForm" component={AttendanceForm} />
      <RootStack.Screen name="UploadMedia" component={UploadMedia} />
      <RootStack.Screen name="Worksheet" component={Worksheet} />
      <RootStack.Screen name="ChallengeQues" component={ChallengeQues} />
    </RootStack.Navigator>
  );
}
