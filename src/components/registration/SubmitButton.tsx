import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { scale} from "react-native-size-matters/extend";
import { custom } from "../../styles/registration/custom";

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
    backgroundColor: custom.primary,
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
    fontFamily: "Quicksand-SemiBold",
    fontSize: 18,
    lineHeight: 25.2,
  },
});

export default SubmitButton;

