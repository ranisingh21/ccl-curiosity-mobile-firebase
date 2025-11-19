// import React from "react";
// import { View, Text, Image, TouchableOpacity } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import styles from "../../styles/registration/otp-verification";
// import SubmitButton from "./SubmitButton";

// interface OtpVerificationProps {
//   onNext: () => void;
//   onBack: () => void;
// }

// const OtpVerification: React.FC<OtpVerificationProps> = ({onBack }) => {
//   const navigation = useNavigation<any>();
//   const handleSubmit = () => {
//     navigation.navigate("RegSuccess"); 
//   };

//   return (
//     <View style={styles.card}>
//       <View style={styles.headerBox}>
//         <TouchableOpacity onPress={onBack} style={styles.headerIconWrapper}>
//           <Image
//             source={require("../../assets/Images/Iconimage.svg")}
//             style={styles.headerIcon}
//             resizeMode="contain"
//           />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>OTP Verification</Text>
//       </View>

//       <View style={styles.contentContainer}>
//         <View>
//           <Text style={styles.fieldLabel}>Teacher Name</Text>
//           <View style={styles.fieldBox}>
//             <Text style={styles.fieldValue}>Sunita Gaitonde</Text>
//           </View>
//         </View>
//         <Text style={styles.textbox}>This phone number will used to login
// </Text>
//         <View style={styles.nextButtonWrapper}>
//           <SubmitButton onPress={handleSubmit} />
//         </View>
//       </View>
//     </View>
//   );
// };

// export default OtpVerification;





import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../../styles/registration/otp-verification";
import SubmitButton from "./SubmitButton";

interface OtpVerificationProps {
  confirm: any;
  phoneNumber: string;
  onBack: () => void;
}

const OtpVerification: React.FC<OtpVerificationProps> = ({ confirm, phoneNumber, onBack }) => {
  const navigation = useNavigation<any>();
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const verifyOTP = async () => {
    // ✅ 1. check if otp is less than 6
    if (otp.length < 6) {
      Alert.alert("Invalid OTP", "Please enter the 6-digit OTP.");
      return;
    }

    try {
      setLoading(true);
      // ✅ 2. verify otp with firebase
      await confirm.confirm(otp);

      Alert.alert("Success", "OTP verified successfully!");
      navigation.navigate("RegSuccess");
    } catch (error: any) {
  if (error.code === 'auth/invalid-verification-code') {
    Alert.alert("Invalid OTP", "The OTP you entered is incorrect or expired.");
  } else {
    Alert.alert("Error", "Something went wrong. Please try again.");
  }
}

    }
  

  return (
    <View style={styles.card}>
      {/* 🔹 Header */}
      <View style={styles.headerBox}>
        <TouchableOpacity onPress={onBack} style={styles.headerIconWrapper}>
          <Image
            source={require("../../assets/Images/Iconimage.svg")}
            style={styles.headerIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>OTP Verification</Text>
      </View>

      {/* 🔹 Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.fieldLabel}>Enter OTP sent to </Text>
        <View style={styles.fieldBox}>
          <TextInput
            style={styles.fieldValue}
            placeholder="Enter OTP"
            keyboardType="numeric"
            value={otp}
            onChangeText={setOtp}
            maxLength={6}
          />
        </View>

        <View style={styles.nextButtonWrapper}>
          <SubmitButton onPress={verifyOTP} disabled={loading} />
        </View>
      </View>
    </View>
  );
};

export default OtpVerification;
