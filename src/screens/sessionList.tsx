import React, { useMemo, useState } from 'react';
import { View, Text, SectionList } from 'react-native';
import SessionHeader, { TabKey } from '../components/sessionList/sessionHeader';
import SectionTitle from '../components/sectionTitle';
import SessionRow, { Session } from '../components/sessionList/sessionRow';
import {ms,s} from '../theme/scales';

const DATA: Session[] = [
  { id: 's1', title: 'Bead Microscope Part 2', startAt: '2025-09-26T17:00:00Z', status: 'live' },
  { id: 's2', title: 'Bead Microscope Part 2', startAt: '2025-09-30T17:00:00Z', status: 'upcoming' },
  { id: 's3', title: 'Bead Microscope Part 2', startAt: '2025-09-23T17:00:00Z', status: 'ended' },
  { id: 's4', title: 'Bead Microscope Part 2', startAt: '2025-09-26T17:00:00Z', status: 'live' },
  { id: 's5', title: 'Bead Microscope Part 2', startAt: '2025-09-30T17:00:00Z', status: 'upcoming' },
  { id: 's6', title: 'Bead Microscope Part 2', startAt: '2025-09-23T17:00:00Z', status: 'ended' },
  { id: 's7', title: 'Bead Microscope Part 2', startAt: '2025-09-26T17:00:00Z', status: 'live' },
  { id: 's8', title: 'Bead Microscope Part 2', startAt: '2025-09-30T17:00:00Z', status: 'upcoming' },
  { id: 's9', title: 'Bead Microscope Part 2', startAt: '2025-09-23T17:00:00Z', status: 'live' },
  { id: 's10', title: 'Bead Microscope Part 2', startAt: '2025-09-19T17:00:00Z', status: 'ended' },
];

type Section = { title: string; data: Session[] };
type Props = {onOpenSession: (s: Session)=>void};

export default function SessionsScreen({onOpenSession}:Props) {
  const [tab, setTab] = useState<TabKey>('active');

  const sections: Section[] = useMemo(() => {
    if (tab === 'active') {
      return [
        { title: 'Live',          data: DATA.filter(s => s.status === 'live') },
        { title: 'Upcoming Next', data: DATA.filter(s => s.status === 'upcoming') },
        { title: 'Last Ended', data: DATA.filter(s => s.status === 'ended') }
      ];
    }
    if (tab === 'upcoming') {
      return [{ title: 'Upcoming Next', data: DATA.filter(s => s.status === 'upcoming') }];
    }
    return [{ title: 'Last Ended', data: DATA.filter(s => s.status === 'ended') }];
  }, [tab]);

  return (
    <View style={{ flex: 1, backgroundColor:'FFFFFF', paddingHorizontal: s(16) }}>
      {/* tabs */}
      <View style={{ marginTop: s(12), marginBottom: s(8) }}>
        <SessionHeader value={tab} onChange={setTab} />
      </View>

      {/* list */}
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section }) => (
          <View style={{ marginTop: s(40) }}>
            <SectionTitle title={section.title} />
          </View>
        )}
        renderItem={({ item }) => <SessionRow session={item} onPress={(id) => onOpenSession(item)} />}
        contentContainerStyle={{ paddingBottom: s(24) }}
        ListEmptyComponent={<Text style={{ textAlign: 'center', color: '#6B7280', marginTop: s(24) }}>No items</Text>}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
}
