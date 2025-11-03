// src/layout/sessionDetail.tsx
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import type { Session } from '../components/sessionList/sessionRow';

export default function SessionDetail({
  session,
  onBack,
}: { session: Session; onBack: () => void }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', paddingVertical: 12 }}>
      <Pressable onPress={onBack} hitSlop={8} style={{ marginBottom: 12 }}>
        <Text style={{ color: '#1E88E5', fontWeight: '700' }}>{'‹'} Back</Text>
      </Pressable>

      <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 8 }}>{session.title}</Text>
      <Text style={{ color: '#6B7280' }}>
        {new Date(session.startAt).toLocaleString()}
      </Text>
      <Text style={{ color: '#6B7280', marginTop: 4 }}>Status: {session.status}</Text>
    </View>
  );
}
