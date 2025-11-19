import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Alert } from "react-native";
import styles from "../../styles/registration/reg-teacher";
import SubmitButton from "./SubmitButton";
import auth from "@react-native-firebase/auth";
// import type { FirebaseAuthTypes } from "@react-native-firebase/auth";

interface LoginProps {
  onNext: (confirm: any /* FirebaseAuthTypes.ConfirmationResult */, phone: string) => void;
  onBack: () => void;
  initialPhoneNumber?: string; // <-- optional prop if you want to prefill
}

const Login: React.FC<LoginProps> = ({ onNext, onBack, initialPhoneNumber = "" }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>(initialPhoneNumber);
  const [loading, setLoading] = useState<boolean>(false);

  const sendOTP = async () => {
    const raw = phoneNumber.trim();
    if (raw.length !== 10) {
      Alert.alert("Invalid", "Please enter a valid 10-digit number");
      return;
    }

    const e164 = `+91${raw}`; // E.164 format

    setLoading(true);
    try {
      const confirm = await auth().signInWithPhoneNumber(e164);
      Alert.alert("OTP Sent!", "Please check your SMS for the OTP.");
      onNext(confirm, e164);
    } catch (e: any) {
      console.log("AUTH ERROR:", e?.code, e?.message);
      Alert.alert(e?.code ?? "Error", e?.message ?? "Failed to send OTP");
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
        <Text style={styles.headerTitle}>Login</Text>
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

export default Login;















// import React, { useState } from "react";
// import { View, Text, Image, TouchableOpacity, TextInput, Alert } from "react-native";
// import styles from "../../styles/registration/reg-teacher";
// import SubmitButton from "./SubmitButton";
// import auth from "@react-native-firebase/auth";

// interface LoginProps {
//   onNext: (confirm: any, phoneNumber: string) => void;
//   onBack: () => void;
// }

// const Login: React.FC<LoginProps> = ({ onNext, onBack,phoneNumber }) => {
//   const [phoneNumber, setPhoneNumber] = useState();
//   console.log(phoneNumber,"number")
//   const [loading, setLoading] = useState(false);
//   console.log(loading,"loading")

//   const sendOTP = async () => {
//     if (phoneNumber.length !== 10) {
//       Alert.alert("Invalid", "Please enter a valid 10-digit number");
//       return;
//     }
//     setLoading(true);
//     try {
//       const confirm = await auth().signInWithPhoneNumber(+91${phoneNumber});
//       Alert.alert("OTP Sent!", "Please check your SMS for the OTP.");
//       onNext(confirm, phoneNumber);
//     }  catch (e: any) {
//   console.log('AUTH ERROR:', e?.code, e?.message);
//   Alert.alert(e?.code ?? 'Error', e?.message ?? 'Failed to send OTP');
//     } finally {
//       setLoading(false);
//     }
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
//         <Text style={styles.headerTitle}>Login</Text>
//       </View>

//   <View style={styles.contentContainer}>
//     <Text style={styles.fieldLabel}>Mobile Number</Text>
//     <View style={styles.fieldBox2}>
//       <TextInput
//         style={styles.fieldValue}
//         placeholder="Enter mobile number"
//         keyboardType="phone-pad"
//         value={phoneNumber}
//         onChangeText={setPhoneNumber}
//         maxLength={10}
//       />
//     </View>
//     <Text style={styles.textbox}>This phone number will be used to login</Text>

//     <View style={styles.nextButtonWrapper}>
//       <SubmitButton 
//         onPress={sendOTP}
//         disabled={loading}
//         loading={loading}
//         title="Send OTP"
//       />
//     </View>
//   </View>
// </View>
//   );
// };

// export default Login;