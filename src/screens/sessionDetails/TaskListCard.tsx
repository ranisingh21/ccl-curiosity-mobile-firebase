import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from '../styles/TaskListCard';

const TaskListCard = () => {
  return (
    <View style={styles.taskCardBox}>
      <Text style={styles.sectionTitle}>Tasks</Text>
      <View style={styles.card}>
        <Text style={styles.taskText}>
          If you have not attended the session kindly see the recorded version.
        </Text>
        <View style={styles.taskRowBox}>
          <View style={styles.taskRow}>
            <Text style={styles.taskLabel}>Attendance Form</Text>
            <Pressable
              style={styles.ctaCircle}
              onPress={() => console.log('Open: Attendance Form')}
            >
              <Text style={styles.ctaArrow}>→</Text>
            </Pressable>
          </View>
          <View style={styles.divider} />
        </View>
        <View style={styles.taskRowBox}>
          <View style={styles.taskRow}>
            <Text style={styles.taskLabel}>Upload Photos & Videos</Text>
            <Pressable
              style={styles.ctaCircle}
              onPress={() => console.log('Open: Upload Photos & Videos')}
            >
              <Text style={styles.ctaArrow}>→</Text>
            </Pressable>
          </View>
          <View style={styles.divider} />
        </View>
        <View style={styles.taskRowBox}>
          <View style={styles.taskRow}>
            <Text style={styles.taskLabel}>WorkSheet</Text>
            <Pressable
              style={styles.ctaCircle}
              onPress={() => console.log('Open: WorkSheet')}
            >
              <Text style={styles.ctaArrow}>→</Text>
            </Pressable>
          </View>
          <View style={styles.divider} />
        </View>
        {/* <View style={styles.challengeBox}> */}
          <View style={styles.taskRow}>
            <Text style={styles.taskLabel}>Challenge Question</Text>
            <Pressable
              style={styles.ctaCircle}
              onPress={() => console.log('Open: Challenge Question')}
            >
              <Text style={styles.ctaArrow}>→</Text>
            </Pressable>
          </View>
        {/* </View> */}
      </View>
    </View>
  );
};

export default TaskListCard;
