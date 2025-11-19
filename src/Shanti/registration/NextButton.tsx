import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import { custom } from "../../styles/globalStyles";
import { scale, verticalScale, moderateScale } from "react-native-size-matters/extend";

interface NextButtonProps {
  onPress?: () => void;
  disabled?: boolean;
}

const NextButton: React.FC<NextButtonProps> = ({ onPress, disabled = false }) => {
  const handlePress = () => {
    if (disabled) return;       // guard
    onPress?.();
  };

  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.buttonDisabled]} 
      onPress={handlePress}
      activeOpacity={disabled ? 1 : 0.7}
      disabled={disabled}                                      
      accessibilityState={{ disabled }}
    >
      <View style={styles.textContainer}>
        <Text style={styles.buttonText}>Next</Text>
        <Image
          source={require("../../assets/Images/Frame img.png")}
          style={styles.arrow}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: scale(45),
    paddingVertical: verticalScale(10),
    backgroundColor: "#189BD7",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    width: scale(170),
    aspectRatio: 170 / 50,
  },
  buttonDisabled: {
    opacity: 0.5,   
    elevation: 0,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  buttonText: {
    color: custom.WHITE,
    fontSize: moderateScale(16),
    fontFamily: "Quicksand-SemiBold",
    fontWeight: "600",
  },
  arrow: {
    width: scale(24),
    height: verticalScale(20),
    alignSelf: "center",
  },
});

export default NextButton;
