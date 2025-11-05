import React from 'react';
import { View, Text, Pressable, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles, COLORS } from '../../styles/sessionDetails/SessionHeader'; 

const SessionHeader: React.FC = () => {
  const navigation = useNavigation(); // 👈 grab navigation

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.headerContaner}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.bgSoft} />
      <Pressable hitSlop={12} onPress={handleBack} accessibilityRole="button"
        accessibilityLabel="Go back">
        <Image
          source={require('../../assets/Images/sesion-page-header-arrow.png')}
          style={styles.backArrowImage}
          resizeMode="contain"
        />
      </Pressable>{' '}
      <Text style={styles.title}>Diwali Themed</Text>
      <View style={styles.tabsRow}>
        <Text style={styles.tab}>MATERIAL</Text>
        <Text style={styles.tabDivider}>|</Text>
        <Text style={styles.tab}>RECORDING</Text>
        <Text style={styles.tabDivider}>|</Text>
        <Text style={styles.tab}>TASK</Text>
      </View>
    </View>
  );
};

export default SessionHeader;
