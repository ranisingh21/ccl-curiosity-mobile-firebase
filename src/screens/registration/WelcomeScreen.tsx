import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoBanner from './LogoBanner';
import styles from '../styles/WelcomeScreen';

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoBanner />
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.programTitle}>Curiosity Program</Text>
          <Text style={styles.programSubtitle}>Let's Get in!</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate('RegSelectSchoolScreen')}
          >
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
