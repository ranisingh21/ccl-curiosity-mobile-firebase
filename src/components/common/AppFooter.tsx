import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import styles from '../../styles/sessionList/app-footer';

export type FooterKey = 'sessions' | 'profile';

type Props = {
  value: FooterKey;
  onChange: (next: FooterKey) => void;
};

const icons = {
  sessions: {
    inactive: require('../../assets/Images/session1.png'),  // Inactive image for sessions
    active: require('../../assets/Images/Session2.png'),    // Active image for sessions
  },
  profile: {
    inactive: require('../../assets/Images/kgbv1.png'),    // Inactive image for KGBV
    active: require('../../assets/Images/kgbv2.png'),      // Active image for KGBV
  },
};
export default function Footer({ value, onChange }: Props) {
  const Item = (key: FooterKey, label: string) => {
    const active = value === key;
    return (
      <Pressable
        key={key}
        onPress={() => onChange(key)}
        style={[styles.item, active && styles.itemactive]}
        accessibilityRole="tab"
        accessibilityState={{ selected: active }}
        hitSlop={8}
      >
        <Image
          source={active ? icons[key].active : icons[key].inactive}
          style={[styles.icon]}
          resizeMode="contain"
        />
        <Text style={[styles.label]}>
          {label}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container} accessibilityRole="tablist">
      {Item('sessions', 'SESSIONS')}
      {Item('profile', 'MY KGBV')}
    </View>
  );
}
 