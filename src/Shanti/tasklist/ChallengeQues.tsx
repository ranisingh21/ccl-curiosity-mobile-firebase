import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChallengeQues: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Shanti Singh</Text>
    </View>
  );
};

export default ChallengeQues;

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
    color: 'blue',
  },
});
