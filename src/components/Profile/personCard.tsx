import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/profilePage/personCard.styles';
import AvatarCircle from './AvatarCircle';

type Props = {
  name: string;                   
  phone: string;                   
  initials?: string;               
  badge?: string;                  
};

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? '';
  const last  = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}

export default function PersonCard({ name, phone, initials, badge = 'YOU ARE REGISTERED' }: Props) {
  const inits = (initials ?? getInitials(name)).slice(0, 2);

  return (
    <View style={styles.card} accessibilityRole="summary">
      {/* Left avatar */}
      <View style={styles.left}>
        <AvatarCircle initials={inits} />
      </View>

      {/* Right content */}
      <View style={styles.right}>
        <Text style={styles.badge}>{badge}</Text>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <Text style={styles.phone}>{phone}</Text>
      </View>
    </View>
  );
}
