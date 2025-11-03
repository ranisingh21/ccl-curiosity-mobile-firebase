import React from 'react';
import { View, Text } from 'react-native';
// import {ms,vs} from '../../theme/scales';
import styles from './AvatarCircle.styles';

type Props = {
  initials: string;   // e.g., "AM"
};

export default function AvatarCircle({ initials}: Props) {
  return (
    <View style={styles.container}
      accessibilityRole="image"
      accessibilityLabel={`Avatar ${initials}`}
    >
      <Text style={styles.title}>
        {initials}
      </Text>
    </View>
  );
}
