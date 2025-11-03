import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BlankComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a blank component</Text>
    </View>
  );
};

export default BlankComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",    
    backgroundColor: "#ffffff",
  },
  text: {
    fontSize: 18,
    color: "#333333",
  },
});
