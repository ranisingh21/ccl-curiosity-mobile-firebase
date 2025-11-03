import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import styles from "../../styles/registration/LogoBanner";

const LogoBanner: React.FC = () => {
  return (
      <View  style={styles.containerBox}> 
      <View style={styles.logoImgContainer}>
        <Image source={require("../../assets/Images/logo.png")} style={styles.logo}  />
        </View>
      <Text style={styles.brandTop}>The Center for Creative Learning</Text>
      <Text style={styles.brandBottom}>IIT Gandhinagar</Text>
     </View>
  );
};

export default LogoBanner;


