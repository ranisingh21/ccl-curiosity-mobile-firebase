import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { scale, moderateScale } from "react-native-size-matters/extend";
import { CustomStyle } from "../styles/CustomStyle";

interface SubmitButtonProps {
  onPress?: () => void; 
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>SUBMIT</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: CustomStyle.primary,
    width: scale(292),
    aspectRatio: 292 / 56,
    borderRadius: 8,
    paddingVertical: scale(15),
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#F6F6F6",
    fontFamily: "Quicksand",
    fontSize: moderateScale(18),
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: scale(25.2),
  },
});

export default SubmitButton;

