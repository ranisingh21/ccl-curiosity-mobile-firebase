import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../../styles/sessionList/sessionRow.styles';

export type SessionStatus = 'live' | 'upcoming' | 'ended';

export type Session = {
  id: string;
  title: string;
  startAt: string;   // ISO
  status: SessionStatus;
};

type Props = {
  session: Session;
  onPress?: (id: string) => void;
};

function day(iso: string) {
  const d = new Date(iso);
  return String(d.getDate()).padStart(2, '0'); // "26"
}
function monthShort(iso: string) {
  return new Date(iso).toLocaleString(undefined, { month: 'short' }); // "Sept"
}
function weekdayTime(iso: string) {
  const d = new Date(iso);
  const wd = d.toLocaleString(undefined, { weekday: 'long' });       // "Friday"
  const tm = d.toLocaleString(undefined, { hour: 'numeric', minute: '2-digit' }); // "5:00 PM"
  return `${wd} | ${tm}`;
}

export default function SessionRow({ session, onPress }: Props) {
  return (
    <Pressable style={styles.card} onPress={() => onPress?.(session.id)} android_ripple={{ color: '#E5E7EB' }}>
      {/* date pill */}
      <View style={styles.datePill}>
        <Text style={styles.date}>{day(session.startAt)}</Text>
        <Text style={styles.date}>{monthShort(session.startAt)}</Text>
      </View>

      {/* middle */}
      <View style={styles.middle}>
        <Text style={styles.title} numberOfLines={1}>{session.title}</Text>
        <Text style={styles.sub} numberOfLines={1}>{weekdayTime(session.startAt)}</Text>
      </View>

      {/* chevron circle */}
      <View style={styles.chevCircle}>
        <Text style={styles.chev}>→</Text>
      </View>
    </Pressable>
  );
}
