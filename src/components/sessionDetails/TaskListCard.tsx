import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles} from '../../styles/sessionDetails/task-list-card';
import { useNavigation } from "@react-navigation/native";

const TaskListCard = () => {
const navigation = useNavigation<any>();
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
              onPress={() => navigation.navigate("AttendanceForm")}
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
              onPress={() => navigation.navigate("UploadMedia")}
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
              onPress={() => navigation.navigate("Worksheet")}
            >
              <Text style={styles.ctaArrow}>→</Text>
            </Pressable>
          </View>
          <View style={styles.divider} />
        </View>
          <View style={styles.taskRow}>
            <Text style={styles.taskLabel}>Challenge Question</Text>
            <Pressable
              style={styles.ctaCircle}
              onPress={() => navigation.navigate("ChallengeQues")}
            >
              <Text style={styles.ctaArrow}>→</Text>
            </Pressable>
          </View>
      </View>
    </View>
  );
};

export default TaskListCard;
