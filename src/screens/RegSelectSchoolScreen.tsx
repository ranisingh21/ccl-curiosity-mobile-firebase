import React, { useState } from "react";
import { View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "../styles/registration/reg-select-school-screen";

import RegistrationSchoolContent from "../components/registration/RgistrationSchoolContent";
import RegSchoolSelectionCard from "../components/registration/RegSchoolSelectionCard";
import RegUniqueCode from "../components/registration/RegUniqueCode";
import RegTeacher from "../components/registration/RegTeacher";
import OtpVerification from "../components/registration/OtpVerification";
import Login from "../components/registration/Login";

const RegSelectSchoolScreen: React.FC = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  // Default step from params
  const initialStep: number = route?.params?.startStep ?? 1;
  const [step, setStep] = useState<number>(initialStep);
  const [confirm, setConfirm] = useState<any>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  // 🔹 Step control functions
  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  // 🔹 OTP send callback (teacher or login)
  const handleOtpSend = (confirmation: any, phone: string) => {
    setConfirm(confirmation);
    setPhoneNumber(phone);
    setStep(5); // ✅ Move to OTP verification step
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <RegistrationSchoolContent />
      </View>

  <View style={styles.mainContainer2}>
    {/* Step 1: Login */}
    {step === 1 && (
      <Login
        onNext={handleOtpSend}
        onBack={() => navigation.navigate("WelcomeScreen")}
      />
    )}

    {/* Step 2: Select School */}
    {step === 2 && (
      <RegSchoolSelectionCard
        onNext={handleNext}
        onBack={() => navigation.navigate("WelcomeScreen")}
      />
    )}

    {/* Step 3: Unique Code */}
    {step === 3 && (
      <RegUniqueCode onNext={handleNext} onBack={handleBack} />
    )}

    {/* Step 4: Teacher Register */}
    {step === 4 && (
      <RegTeacher
        onNext={handleOtpSend}
        onBack={handleBack}
      />
    )}

    {/* Step 5: OTP Verification */}
    {step === 5 && (
      <OtpVerification
        confirm={confirm}
        phoneNumber={phoneNumber}
        onBack={() => setStep(4)}
      />
    )}
  </View>
</View>
  );
};

export default RegSelectSchoolScreen;






































// // import React, { useState } from "react";   
// // import { View } from "react-native";
// // import styles from "../styles/registration/reg-select-school-screen";   
// // import RegistrationSchoolContent from "../components/registration/RgistrationSchoolContent";
// // import RegSchoolSelectionCard from "../components/registration/RegSchoolSelectionCard";
// // import RegUniqueCode from "../components/registration/RegUniqueCode";
// // import RegTeacher from "../components/registration/RegTeacher";
// // import { useNavigation } from "@react-navigation/native"
// // import OtpVerification from "../components/registration/OtpVerification";

// // const RegSelectSchoolScreen: React.FC = () => {
// //   const [step, setStep] = useState(1);
// //   const [confirm, setConfirm] = useState<any>(null);
// //   const [phoneNumber, setPhoneNumber] = useState<string>("");

// //   const navigation = useNavigation<any>();

// //   const handleNext = () => setStep(step + 1);
// //   const handleBack = () => setStep(step - 1);

// //   const handleOtpSend = (confirmation: any, phone: string) => {
// //     setConfirm(confirmation);
// //     setPhoneNumber(phone);
// //     setStep(4); // move to OTP verification step
// //   };

// //   return (
// //     <View style={styles.mainContainer}>
// //       <View style={styles.header}>
// //         <RegistrationSchoolContent />
// //       </View>

// //       <View style={styles.mainContainer2}>
// //         {step === 1 && (
// //           <RegSchoolSelectionCard 
// //             onNext={handleNext}
// //             onBack={() => navigation.goBack()}
// //           />
// //         )}

// //         {step === 2 && <RegUniqueCode onNext={handleNext} onBack={handleBack} />}

// //         {step === 3 && (
// //           <RegTeacher 
// //             onNext={handleOtpSend} // OTP bhejne ke baad yahi call hoga
// //             onBack={handleBack} 
// //           />
// //         )}

// //         {step === 4 && (
// //           <OtpVerification
// //             confirm={confirm}
// //             phoneNumber={phoneNumber}
// //             onBack={() => setStep(3)}
// //           />
// //         )}
// //       </View>
// //     </View>
// //   );
// // };

// // export default RegSelectSchoolScreen;



// import React, { useState } from "react";
// import { View } from "react-native";
// import styles from "../styles/registration/reg-select-school-screen";
// import RegistrationSchoolContent from "../components/registration/RgistrationSchoolContent";
// import RegSchoolSelectionCard from "../components/registration/RegSchoolSelectionCard";
// import RegUniqueCode from "../components/registration/RegUniqueCode";
// import RegTeacher from "../components/registration/RegTeacher";
// import OtpVerification from "../components/registration/OtpVerification";
// import { useNavigation } from "@react-navigation/native";

// const RegSelectSchoolScreen: React.FC = () => {
//   const [step, setStep] = useState(1);
//   const [confirm, setConfirm] = useState<any>(null);
//   const [phoneNumber, setPhoneNumber] = useState<string>("");
//   const navigation = useNavigation<any>();

//   const handleNext = () => setStep(step + 1);
//   const handleBack = () => setStep(step - 1);

//   const handleOtpSend = (confirmation: any, phone: string) => {
//     setConfirm(confirmation);
//     setPhoneNumber(phone);
//     setStep(4);
//   };

//   return (
//       <View style={styles.mainContainer}>
//         <View style={styles.header}>
//           <RegistrationSchoolContent />
//         </View>

//         <View style={styles.mainContainer2}>
//           {step === 1 && (
//             <RegSchoolSelectionCard
//               onNext={handleNext}
//               onBack={() => navigation.goBack()}
//             />
//           )}
//           {step === 2 && <RegUniqueCode onNext={handleNext} onBack={handleBack} />}
//           {step === 3 && <RegTeacher onNext={handleOtpSend} onBack={handleBack} />}
//           {step === 4 && (
//             <OtpVerification
//               confirm={confirm}
//               phoneNumber={phoneNumber}
//               onBack={() => setStep(3)}
//             />
//           )}
//         </View>
//       </View>
//   );
// };

// export default RegSelectSchoolScreen;
