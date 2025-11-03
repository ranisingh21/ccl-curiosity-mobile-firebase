import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from '../styles/SessionFooter'; // ✅ same folder → use './styles/...'

const SessionFooter: React.FC = () => {
  return (
    <View style={styles.bottomBarWrapper}>
      <View style={styles.bottomBar}>
        <View style={styles.datePill}>
          <Text style={styles.dateBig}>29</Text>
          <Text style={styles.dateSmall}>Sept</Text>
        </View>
        <View style={styles.sessionInfo}>
          <Text style={styles.sessionLabel}>Session starts at</Text>
          <Text style={styles.sessionWhen}>Friday | 5 pm</Text>
        </View>
        <Pressable
          style={styles.joinBtn}
          onPress={() => console.log('Join clicked')}
        >
          <Text style={styles.joinText}>JOIN</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SessionFooter;
