import React from 'react';
import { View, Text } from 'react-native';
import styles from './passwordCard.styles';
import CodeBoxes from './codebox';

type Props = {
  schoolName: string;
  location: string;   // e.g. "District Bathinda, State Punjab"
  code: string;       // e.g. "7777777"
};

export default function AppPasswordCard({ schoolName, location, code }: Props) {
  return (
    <View style={styles.card} accessibilityRole="summary">
      <Text style={styles.school}>{schoolName}</Text>
      <Text style={styles.location}>{location}</Text>

      <View style={styles.codeWrap}>
        <CodeBoxes value={code} />
      </View>

      <Text style={styles.caption}>Unique Code</Text>
    </View>
  );
}
