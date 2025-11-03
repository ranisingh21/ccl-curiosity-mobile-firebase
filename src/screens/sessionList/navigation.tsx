import React, { useState } from 'react';
import { View } from 'react-native';

import Header from './header';
import Footer, { FooterKey } from './footer';
import SessionsScreen from './sessionList';
import ProfileScreen from '../profilePage/profile';
import SessionDetail from './sessiondetail';
import type { Session } from './sessionRow';
import {s} from '../../theme/scales';

export default function Navigation() {
  const [tab, setTab] = useState<FooterKey>('sessions');
  const [open, setOpen] = useState<Session | null>(null);  

  const headerTitle =
  tab === 'sessions' ? 'Session List' : 'My KGBV Profile';

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      {/* Header hidden on detail */}
      {!open && <Header title={headerTitle} />}

      <View style={{ flex: 1, paddingHorizontal: s(16) }}>
        {open ? (
          // FULL SCREEN detail (no header/footer)
          <SessionDetail session={open} onBack={() => setOpen(null)} />
        ) : tab === 'sessions' ? (
          <SessionsScreen onOpenSession={setOpen} />  
        ) : (
          <ProfileScreen />
        )}
      </View>

      {/* Footer hidden on detail */}
      {!open && <Footer value={tab} onChange={setTab} />}
    </View>
  );
}
