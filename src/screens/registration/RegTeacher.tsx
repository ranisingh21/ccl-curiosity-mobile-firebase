import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../../styles/registration/RegTeacher";
import SubmitButton from "./SubmitButton";

interface RegTeacherProps {
  onNext: () => void;
  onBack: () => void;
}

const RegTeacher: React.FC<RegTeacherProps> = ({ onBack }) => {
  const navigation = useNavigation<any>();
  const handleSubmit = () => {
    navigation.navigate("RegSuccess"); 
  };

  return (
    <View style={styles.card}>
      <View style={styles.headerBox}>
        <TouchableOpacity onPress={onBack} style={styles.headerIconWrapper}>
          <Image
            source={require("../../assets/Images/Icon.png")}
            style={styles.headerIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Teacher Register</Text>
      </View>

      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.fieldLabel}>Teacher Name</Text>
          <View style={styles.fieldBox}>
            <Text style={styles.fieldValue}>Sunita Gaitonde</Text>
          </View>
        </View>

        <View>
          <Text style={styles.fieldLabel}>Mobile Number</Text>
          <View style={styles.fieldBox2}>
            <Text style={styles.fieldValue}>7788556634</Text>
          </View>
          <Text style={styles.textbox}>
            This phone number will used to login
          </Text>
        </View>

        <View>
          <Text style={styles.fieldLabel}>Enter OTP send to Mobile</Text>
          <View style={styles.fieldBoxLast}>
            <Text style={styles.fieldValue}>7788556634</Text>
          </View>
          <View style={styles.textlinkbox}>
            <Text style={styles.textLink}>Resend OTP</Text>
            <Text style={styles.textLink2}>48 Secs remaining</Text>
          </View>
        </View>

        <View style={styles.nextButtonWrapper}>
          <SubmitButton onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

export default RegTeacher;






