import React from 'react';
import { View, Text } from 'react-native';
import PasswordCard from '../Shanti/Profile/PasswordCard';
import PersonCard from '../Shanti/Profile/PersonCard';
import SectionTitle from '../Shanti/common/SectionTitle';
import { scale } from 'react-native-size-matters/extend';

export default function Profile() {
  return (
    <View>
    <View style={{paddingTop:scale(40)}}>
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
      marginLeft:scale(20),
      marginRight:scale(20),
      marginBottom:scale(40), }}>
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
