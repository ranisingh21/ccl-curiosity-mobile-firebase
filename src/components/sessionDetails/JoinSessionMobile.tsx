import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleProp,
  ViewStyle,
  TextStyle,
  Image,
} from 'react-native';
import { styles } from '../../styles/sessionDetails/JoinSessionMobile';

interface JoinSessionMobileProps {
  containerStyle?: StyleProp<ViewStyle>; 
  titleStyle?: StyleProp<TextStyle>; 
}
const JoinSessionMobile: React.FC<JoinSessionMobileProps> = ({

  titleStyle,
}) => {
  return (
    <View style={styles.card}>
      <Text style={[styles.cardTitle, titleStyle]}>
        Mobile |<Text style={styles.muted}> Mobile से जुड़ने के लिए: -</Text>
      </Text>
      <Pressable style={styles.actionRow}>
        <View style={[styles.iconCircle, { backgroundColor: '#2D8CFF20' }]}>
          <Image
            source={require('../../assets/Images/session-page-zoom-logo.png')}
            // style={styles.sessionActivityImage}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.actionText}>JOIN ZOOM</Text>
        <Text style={styles.arrow}>→</Text>
      </Pressable>

      <Pressable style={[styles.actionRow, { marginTop: 12 }]}>
        <View style={styles.iconCircle}>
                    <Image
            source={require('../../assets/Images/session-page-youtube-logo.png')}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.actionText}>JOIN YOUTUBE</Text>
        <Text style={styles.arrow}>→</Text>
      </Pressable>
    </View>
  );
};

export default JoinSessionMobile;
