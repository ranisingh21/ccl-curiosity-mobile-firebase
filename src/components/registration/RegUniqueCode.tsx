import React from "react";
import { View, Text, Image,TouchableOpacity } from "react-native";
import styles from "../../styles/registration/RegUniqueCode";
import NextButton from "./NextButton";
interface RegUniqueCodeProps {
  onNext: () => void;
  onBack: () => void;
}

const RegUniqueCode: React.FC<RegUniqueCodeProps> = ({ onNext, onBack }) => {
  return (
    <View style={styles.card}>

      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onBack} style={styles.iconWrapper}>
          <Image
            source={require("../../assets/Images/Icon.png")}
            style={styles.iconImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Unique Code</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.bannerBox}>
          <View style={styles.bannerIconBox}>
            <Image
              source={require("../../assets/Images/Discussion.png")}
            />
          </View>
          <Text style={styles.bannerMessage}>Dont have Unique Code</Text>
          <Image
            source={require("../../assets/Images/thanksarrow.png")}
            style={styles.bannerArrowIcon}
          />
        </View>

        <Text style={styles.inputLabel}>Enter Unique Code</Text>

        <View style={styles.otpContainer}>
          {Array.from({ length: 6 }).map((_, i) => (
            <View key={i} style={styles.otpInputBox} />
          ))}
        </View>

        <View style={styles.nextButtonWrapper}>
          <NextButton onPress={onNext}/>
        </View>
      </View>
    </View>
  );
};

export default RegUniqueCode;
