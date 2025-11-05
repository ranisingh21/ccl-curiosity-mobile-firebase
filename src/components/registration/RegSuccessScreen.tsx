import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import createStyles from '../../styles/registration/RegisterSuccessScreen';

const RegisterSuccessScreen: React.FC = () => {
  const styles = createStyles();

  return (
    <View style={styles.screenBox}>
        <View style={styles.imageContainer}>
          <Image
             source={require('../../assets/Images/image.png')}
            style={styles.imageBox}
         />
        </View>

        <View style={styles.textBlock}>
          <Text style={styles.thanksBox}>Thank you for Registering</Text>
          <Text style={styles.name}>Sunita Gaitonde</Text>
          <Text style={styles.subLine}>KGBV Sangat Guda, Bathinda, Punjab</Text>
        </View>

        <View style={styles.registrationCheckButton}>
          <TouchableOpacity style={styles.CheckButtonBox}>
            <Text style={styles.CheckButtonBoxText}>Check Sessions </Text>
            <Image
                source={require('../assets/images/Frame 3473171.png')}
                style={styles.arrow}
            />
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default RegisterSuccessScreen;



