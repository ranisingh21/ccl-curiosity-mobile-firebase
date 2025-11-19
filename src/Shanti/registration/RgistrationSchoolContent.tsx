import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../../styles/registration/reg-select-school-screen";

const RegistrationSchoolContent: React.FC = () => {
  return (
    <>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/Images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View>
        <Text style={styles.title}>Curiosity Program</Text>
        <Text style={styles.subTitle}>
          The Center for Creative Learning{"\n"}IIT Gandhinagar
        </Text>
      </View>
    </>
  );
};
export default RegistrationSchoolContent;
