import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles/sessionList/sectionTitle.styles';

type Props = {
  title: string;
  rightSlot?: React.ReactNode; // optional (e.g., "Edit" button)
};

export default function SectionTitle({ title, rightSlot }: Props) {
  return (
    <View accessibilityRole="header">
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
