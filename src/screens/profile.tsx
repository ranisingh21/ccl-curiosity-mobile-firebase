import React from 'react';
import { View, Text } from 'react-native';
import PasswordCard from '../components/Profile/passwordCard';
import PersonCard from '../components/Profile/personCard';
import SectionTitle from '../components/common/SectionTitle';
import {factor, ms,s} from '../theme/scales';

export default function Profile() {
  return (
    <View>
    <View style={{paddingTop:s(40)}}>
    <SectionTitle title="App Password" />
    <PasswordCard 
      schoolName="KGBV Sangat Guda"
      location="District Bathinda, State Punjab"
      code="77777"
    />

    <Text style={{ color: '#2B353A',
      fontFamily: 'Quicksand-Medium',
      fontSize: 14, 
      // fontWeight: '500',
      lineHeight: 19.6,
      marginLeft:s(20),
      marginRight:s(20),
      marginBottom:s(40), }}>
      For attending sessions, this password can be shared with other teachers of your KGBV.
      They have to register, to gain access.
    </Text>

    <SectionTitle title="Your Details" />
    <PersonCard
      name="Alejandra Modisette"
      phone="+91 74563 98456"
    />
    </View>
    </View>
  );
}
