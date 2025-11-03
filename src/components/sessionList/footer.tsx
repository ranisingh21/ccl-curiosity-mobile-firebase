import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import styles from './footer.styles';

export type FooterKey = 'sessions' | 'myKgbv';

type Props = {
  value: FooterKey;
  onChange: (next: FooterKey) => void;
};

const icons = {
  sessions: {
    inactive: require('../assets/session1.png'),  // Inactive image for sessions
    active: require('../assets/Session2.png'),    // Active image for sessions
  },
  myKgbv: {
    inactive: require('../assets/kgbv1.png'),    // Inactive image for KGBV
    active: require('../assets/kgbv2.png'),      // Active image for KGBV
  },
};
export default function Footer({ value, onChange }: Props) {
  const Item = (key: FooterKey, label: string) => {
    const active = value === key;
    return (
      <Pressable
        key={key}
        onPress={() => onChange(key)}
        style={[styles.item, active && styles.itemActive]}
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
      {Item('myKgbv', 'MY KGBV')}
    </View>
  );
}
