// import React from "react";
// import { View, Text, Image, TouchableOpacity } from "react-native";
// import styles from "../../styles/registration/reg-teacher";
// import SubmitButton from "./SubmitButton";

// interface RegTeacherProps {
//   onNext: () => void;
//   onBack: () => void;
// }

// const RegTeacher: React.FC<RegTeacherProps> = ({onNext, onBack }) => {
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
//         <Text style={styles.headerTitle}>Teacher Register</Text>
//       </View>

//       <View style={styles.contentContainer}>
//         <View>
//           <Text style={styles.fieldLabel}>Teacher Name</Text>
//           <View style={styles.fieldBox}>
//             <Text style={styles.fieldValue}>Sunita Gaitonde</Text>
//           </View>
//         </View>

//         <View>
//           <Text style={styles.fieldLabel}>Mobile Number</Text>
//           <View style={styles.fieldBox2}>
//             <Text style={styles.fieldValue}>7788556634</Text>
//           </View>
//           <Text style={styles.textbox}>
//             This phone number will used to login
//           </Text>
//         </View>

      

//         <View style={styles.nextButtonWrapper}>
//           <SubmitButton onPress={onNext} />
//         </View>
//       </View>
//     </View>
//   );
// };

// export default RegTeacher;




import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Alert } from "react-native";
import styles from "../../styles/registration/reg-teacher";
import SubmitButton from "./SubmitButton";
import auth from "@react-native-firebase/auth";

interface RegTeacherProps {
  onNext: (confirm: any, phoneNumber: string) => void;
  onBack: () => void;
}

const RegTeacher: React.FC<RegTeacherProps> = ({ onNext, onBack }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  console.log(phoneNumber,"number")
  const [loading, setLoading] = useState(false);
  console.log(loading,"loading")

  const sendOTP = async () => {
    if (phoneNumber.length !== 10) {
      Alert.alert("Invalid", "Please enter a valid 10-digit number");
      return;
    }
    setLoading(true);
    try {
      const confirm = await auth().signInWithPhoneNumber(`+91${phoneNumber}`);
      Alert.alert("OTP Sent!", "Please check your SMS for the OTP.");
      onNext(confirm, phoneNumber);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to send OTP. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.headerBox}>
        <TouchableOpacity onPress={onBack} style={styles.headerIconWrapper}>
          <Image
            source={require("../../assets/Images/Iconimage.svg")}
            style={styles.headerIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Teacher Register</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.fieldLabel}>Mobile Number</Text>
        <View style={styles.fieldBox2}>
          <TextInput
            style={styles.fieldValue}
            placeholder="Enter mobile number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            maxLength={10}
          />
        </View>
        <Text style={styles.textbox}>This phone number will be used to login</Text>

        <View style={styles.nextButtonWrapper}>
          <SubmitButton 
            onPress={sendOTP}
            disabled={loading}
            loading={loading}
            title="Send OTP"
          />
        </View>
      </View>
    </View>
  );
};

export default RegTeacher;


