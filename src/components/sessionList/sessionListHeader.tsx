import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../../styles/sessionList/sessionListHeader.styles';

export type TabKey = 'active' | 'upcoming' | 'past';

type Props = {
  value: TabKey;                       // which tab is selected
  onChange: (next: TabKey) => void;    // notify parent
};

const TABS: { key: TabKey; label: string }[] = [
  { key: 'past',   label: 'Past' },
  { key: 'active', label: 'Active' },
  { key: 'upcoming', label: 'Upcoming' },
];

export default function SessionHeader({ value, onChange }: Props) {
  return (
    <View style={styles.wrap} accessibilityRole="tablist">
      {TABS.map((t, i) => {
        const selected = t.key === value;
        return (
          <Pressable
            key={t.key}
            onPress={() => onChange(t.key)}
            style={[styles.tabBase]}
            accessibilityRole="tab"
            accessibilityState={{ selected }}
            hitSlop={8}
          >
            <Text style={[styles.label]}>
              {t.label}
            </Text>
            {selected ? <View style={styles.underline} /> : null}
          </Pressable>
        );
      })}
    </View>
  );
}
