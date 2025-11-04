// src/navigation/MainTabsNavigator.tsx
import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import Header from "../screens/sessionList/header";
import SessionsScreen from "../screens/sessionList/sessionList";
import SessionDetail from "../screens/sessionDetails/MainSessionDetail";
import ProfileScreen from "../screens/profilePage/profile";
import type { Session } from "../screens/sessionList/sessionRow";
import { s } from "../theme/scales";

import CustomFooterTabBar from "../screens/sessionList/CustomFooterBar";

type SessionsStackParamList = {
  SessionsList: undefined;
  SessionDetail: { session: Session };
};

const SessionsStackNav = createNativeStackNavigator<SessionsStackParamList>();
function SessionsStack() {
  return (
    <SessionsStackNav.Navigator screenOptions={{ headerShown: false }}>
      <SessionsStackNav.Screen name="SessionsList" component={SessionsListWithHeader} />
      <SessionsStackNav.Screen name="SessionDetail" component={SessionDetail} />
    </SessionsStackNav.Navigator>
  );
}

function SessionsListWithHeader({ navigation }: any) {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Header title="Session List" />
      <View style={{ flex: 1, paddingHorizontal: s(16) }}>
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
      <View style={{ flex: 1, paddingHorizontal: s(16) }}>
        <ProfileScreen />
      </View>
    </View>
  );
}

type TabParamList = { sessions: undefined; profile: undefined };
const Tab = createBottomTabNavigator<TabParamList>();

export default function MainTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomFooterTabBar {...props} />}  // <— uses your Footer.tsx
    >
      <Tab.Screen
        name="sessions"
        component={SessionsStack}
        options={({ route }) => ({
          // hide footer on session detail
          tabBarStyle: shouldHideFooter(route) ? { display: "none" } : undefined,
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
