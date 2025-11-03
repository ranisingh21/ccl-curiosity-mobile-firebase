import React, { useState } from "react";
import { View } from "react-native";
import styles from "../styles/RegSelectSchoolScreen";
import RegistrationSchoolContent from "./RgistrationSchoolContent";
import RegSchoolSelectionCard from "./RegSchoolSelectionCard";
import RegUniqueCode from "./RegUniqueCode";
import RegTeacher from "./RegTeacher";

const RegSelectSchoolScreen: React.FC = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <RegistrationSchoolContent />
      </View>

      <View style={styles.mainContainer2}>
        {step === 1 && <RegSchoolSelectionCard onNext={handleNext} />}
        {step === 2 && <RegUniqueCode onNext={handleNext} onBack={handleBack} />}
        {step === 3 && <RegTeacher onNext={handleNext} onBack={handleBack} />}
      </View>
    </View>
  );
};

export default RegSelectSchoolScreen;












// import React, { useState } from "react";
// import { View, ScrollView } from "react-native";
// import styles from "../styles/RegSelectSchoolScreen";
// import RegistrationSchoolContent from "./RgistrationSchoolContent";
// import RegSchoolSelectionCard from "./RegSchoolSelectionCard";
// import RegUniqueCode from "./RegUniqueCode";
// import RegTeacher from "./RegTeacher";

// const RegSelectSchoolScreen: React.FC = () => {
//   const [step, setStep] = useState(1);

//   const handleNext = () => {
//     setStep(step + 1);
//   };

//   const handleBack = () => {
//     setStep(step - 1);
//   };

//   return (
//     <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//       <View style={styles.mainContainer}>
//         <View style={styles.header}>
//           <RegistrationSchoolContent />
//         </View>

//         <View style={styles.mainContainer2}>
//           {step === 1 && <RegSchoolSelectionCard onNext={handleNext} />}
//           {step === 2 && <RegUniqueCode onNext={handleNext} onBack={handleBack} />}
//           {step === 3 && <RegTeacher onNext={handleNext} onBack={handleBack} />}
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default RegSelectSchoolScreen;
