// import React from "react";
// import { TouchableOpacity, Text, StyleSheet } from "react-native";
// import { scale} from "react-native-size-matters/extend";
// import { custom } from '../../styles/globalStyles';
// interface SubmitButtonProps {
//   onPress?: () => void; 
// }

// const SubmitButton: React.FC<SubmitButtonProps> = ({ onPress }) => {
//   return (
//     <TouchableOpacity style={styles.button} onPress={onPress}>
//       <Text style={styles.text}>SUBMIT</Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: custom.primary,
//     width: scale(292),
//     aspectRatio: 292 / 56,
//     borderRadius: 8,
//     paddingVertical: scale(15),
//     flexShrink: 0,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     color: "#F6F6F6",
//     fontFamily: "Quicksand-SemiBold",
//     fontSize: 18,
//     lineHeight: 25.2,
//   },
// });

// export default SubmitButton;


import React from "react";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";
import { scale } from "react-native-size-matters/extend";
import { custom } from "../../styles/globalStyles";

interface SubmitButtonProps {
  onPress?: () => void;
  disabled?: boolean;   // ✅ Added disabled prop
  loading?: boolean;    // ✅ Added loading indicator prop
  title?: string;       // ✅ Optional button text
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  onPress,
  disabled = false,
  loading = false,
  title = "SUBMIT",
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled ? { opacity: 0.6 } : {}, // visually show disabled state
      ]}
      onPress={!disabled ? onPress : undefined}
      activeOpacity={0.8}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator color="#fff" /> // shows spinner when loading
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: custom.primary,
    width: scale(292),
    aspectRatio: 292 / 56,
    borderRadius: 8,
    paddingVertical: scale(15),
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#F6F6F6",
    fontFamily: "Quicksand-SemiBold",
    fontSize: 18,
    lineHeight: 25.2,
  },
});

export default SubmitButton;
