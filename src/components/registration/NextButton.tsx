import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import { custom } from "../../styles/registration/custom";
import { scale, verticalScale, moderateScale } from "react-native-size-matters/extend";

interface NextButtonProps {
  onPress?: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
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

