import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Linking,
  Alert,
} from "react-native";
import styles from "../../styles/registration/reg-unique-code";
import NextButton from "./NextButton";

interface RegUniqueCodeProps {
  onNext: () => void;
  onBack: () => void;
}

const RegUniqueCode: React.FC<RegUniqueCodeProps> = ({ onNext, onBack }) => {
  const [showContactModal, setShowContactModal] = useState(false);
  const phoneNumber = "+918707639995";

  // ✅ Fixed version of handlePhonePress
  const handlePhonePress = () => {
    const url = `tel:${phoneNumber}`;
    Linking.openURL(url)
      .then(() => setShowContactModal(false))
      .catch(() => {
        Alert.alert("Error", "Could not open dialer on this device.");
        setShowContactModal(false);
      });
  };

  const handleWhatsAppPress = async () => {
    const message = "Hello!"; // optional pre-filled message
    const appUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    const webUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    const supported = await Linking.canOpenURL(appUrl);
    if (supported) {
      await Linking.openURL(appUrl);
    } else {
      await Linking.openURL(webUrl);
    }
    setShowContactModal(false);
  };

  return (
    <View style={styles.card}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onBack} style={styles.iconWrapper}>
          <Image
            source={require("../../assets/Images/Iconimage.svg")}
            style={styles.iconImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Unique Code</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.bannerBox}>
          <View style={styles.bannerIconBox}>
            <Image source={require("../../assets/Images/Discussion.png")} />
          </View>
          <Text style={styles.bannerMessage}>Don't have Unique Code</Text>
          <TouchableOpacity onPress={() => setShowContactModal(true)}>
            <Image
              source={require("../../assets/Images/thanksarrow.png")}
              style={styles.bannerArrowIcon}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.inputLabel}>Enter Unique Code</Text>

        <View style={styles.otpContainer}>
          {Array.from({ length: 6 }).map((_, i) => (
            <View key={i} style={styles.otpInputBox} />
          ))}
        </View>

        <View style={styles.nextButtonWrapper}>
          <NextButton onPress={onNext} />
        </View>
      </View>

      {/* Contact Modal */}
      <Modal
        transparent
        visible={showContactModal}
        animationType="fade"
        onRequestClose={() => setShowContactModal(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              width: "80%",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 20 }}>
              Contact Options
            </Text>

            <TouchableOpacity
              onPress={handlePhonePress}
              style={{
                backgroundColor: "#189BD7",
                padding: 12,
                borderRadius: 8,
                width: "80%",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 16 }}>📞 Phone</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleWhatsAppPress}
              style={{
                backgroundColor: "#25D366",
                padding: 12,
                borderRadius: 8,
                width: "80%",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 16 }}>💬 WhatsApp</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setShowContactModal(false)}
              style={{ marginTop: 15 }}
            >
              <Text style={{ color: "red" }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default RegUniqueCode;


// import React from "react";
// import { View, Text, Image,TouchableOpacity } from "react-native";
// import styles from "../../styles/registration/reg-unique-code";
// import NextButton from "./NextButton";
// interface RegUniqueCodeProps {
//   onNext: () => void;
//   onBack: () => void;
// }

// const RegUniqueCode: React.FC<RegUniqueCodeProps> = ({ onNext, onBack }) => {
//   return (
//     <View style={styles.card}>

//       <View style={styles.headerContainer}>
//         <TouchableOpacity onPress={onBack} style={styles.iconWrapper}>
//           <Image
//             source={require("../../assets/Images/Iconimage.svg")}
//             style={styles.iconImage}
//             resizeMode="contain"
//           />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Unique Code</Text>
//       </View>

//       <View style={styles.contentContainer}>
//         <View style={styles.bannerBox}>
//           <View style={styles.bannerIconBox}>
//             <Image
//               source={require("../../assets/Images/Discussion.png")}
//             />
//           </View>
//           <Text style={styles.bannerMessage}>Dont have Unique Code</Text>
//           <Image
//             source={require("../../assets/Images/thanksarrow.png")}
//             style={styles.bannerArrowIcon}
//           />
//         </View>

//         <Text style={styles.inputLabel}>Enter Unique Code</Text>

//         <View style={styles.otpContainer}>
//           {Array.from({ length: 6 }).map((_, i) => (
//             <View key={i} style={styles.otpInputBox} />
//           ))}
//         </View>

//         <View style={styles.nextButtonWrapper}>
//           <NextButton onPress={onNext}/>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default RegUniqueCode;
