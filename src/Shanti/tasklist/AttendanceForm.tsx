import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AttendanceForm: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rani SIngh Chauhan</Text>
    </View>
  );
};

export default AttendanceForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',    
    backgroundColor: '#f2f2f2',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: 'red',
  },
});
