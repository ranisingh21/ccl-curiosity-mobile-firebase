import React from "react";
import { View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { CustomStyle } from "../styles/CustomStyle";
import LogoBanner from "./LogoBanner";
import { scale } from "react-native-size-matters/extend";

const IntroScreen: React.FC = () => {
const navigation = useNavigation<any>();

  return (
    <Pressable onPress={() => navigation.navigate("WelcomeScreen")}>
      <SafeAreaView
        style={{
          backgroundColor: CustomStyle.primary,
          paddingTop: scale(502),
          paddingBottom: scale(222),
        }}
      >
        <View style={{ alignItems: "center" }}>
          <LogoBanner />
        </View>
      </SafeAreaView>
    </Pressable>
  );
};

export default IntroScreen;
