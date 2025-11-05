import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/profilePage/code-box';

type Props = {
  value: string;        // characters to render as boxes
  boxCount?: number;    // optional, defaults to value.length
};

export default function CodeBoxes({ value, boxCount }: Props) {
  const chars = value.split('');
  const count = boxCount ?? chars.length;

  // pad with empty boxes if boxCount > value.length
  const items = Array.from({ length: count }, (_, i) => chars[i] ?? '');

  return (
    <View style={styles.row} accessibilityRole="list">
      {items.map((ch, i) => (
        <View key={i} style={[styles.box, i < count - 1 && styles.boxGap]}>
          <Text style={styles.digit}>{ch}</Text>
        </View>
      ))}
    </View>
  );
}
