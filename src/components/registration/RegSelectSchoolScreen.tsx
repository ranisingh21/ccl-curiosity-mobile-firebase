import React, { useState } from "react";
import { View } from "react-native";
import styles from "../../styles/registration/RegSelectSchoolScreen";
import RegistrationSchoolContent from "../../components/registration/RgistrationSchoolContent";
import RegSchoolSelectionCard from "../../components/registration/RegSchoolSelectionCard";
import RegUniqueCode from "../../components/registration/RegUniqueCode";
import RegTeacher from "../../components/registration/RegTeacher";
import { useNavigation } from "@react-navigation/native"

const RegSelectSchoolScreen: React.FC = () => {
  const [step, setStep] = useState(1);
 const navigation = useNavigation<any>();

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
        {step === 1 && <RegSchoolSelectionCard onNext={handleNext}
          onBack={() => navigation.goBack()}/>}
        {step === 2 && <RegUniqueCode onNext={handleNext} onBack={handleBack} />}
        {step === 3 && <RegTeacher onNext={handleNext} onBack={handleBack} />}
      </View>
    </View>
  );
};

export default RegSelectSchoolScreen;




