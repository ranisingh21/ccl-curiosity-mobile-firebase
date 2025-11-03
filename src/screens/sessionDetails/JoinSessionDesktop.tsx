import React from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { styles } from '../styles/JoinSessionDesktop';
const JoinSessionDesktop: React.FC = () => {
  return (
    <View style={styles.allCard}>
      <Text style={styles.sectionTitle}>Join Session</Text>
      <View style={styles.card}>
        <Text style={styles.deviceCard}>TV/ Laptop</Text>
        <Text style={styles.deviceCardmuted}>अपने Browser में लिंक लिखें-</Text>

        <View style={styles.deviceLink}>
          <Text style={styles.label}>लिंक COPY</Text>
          <Pressable style={styles.linkRow} onPress={() => {}}>
            <Text style={styles.BtnText}>CCL.com/Join</Text>
            <Text style={styles.copyIcon}>📋</Text>
          </Pressable>
        </View>

        <View style={styles.deviceLink}>
          <Text style={[styles.label, { marginTop: 14 }]}>पिन COPY</Text>
          <View style={styles.pinRow}>
            <TextInput style={styles.pinBox} defaultValue="7" />
            <TextInput style={styles.pinBox} defaultValue="7" />
            <TextInput style={styles.pinBox} defaultValue="7" />
            <TextInput style={styles.pinBox} defaultValue="7" />
            <TextInput style={styles.pinBox} defaultValue="7" />
            <TextInput style={styles.pinBox} defaultValue="7" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default JoinSessionDesktop;
