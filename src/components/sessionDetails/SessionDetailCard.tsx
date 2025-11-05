import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../../styles/sessionDetails/session-detail-card';

export default function SessionDetailCard() {
  const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <View style={styles.card}>{children}</View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.sessionCardBox}>
        <Text style={styles.sectionTitle}>About The Session</Text>
        <Card>
          <Text style={styles.hindiQuestion}>
            क्या आपने सोचा है कि एक परखनली या टेस्ट ट्यूब में इन्द्रधनुष कैसे बन
            सकता है?
          </Text>
          <Text style={styles.hindiAns}>
            अम्ल और क्षार का इस्तेमाल करके हम अलग-अलग pH के बैंड बनाएँगे और
            बुलबुले बनते हुए देखेंगे—जिसे हम कहते हैं ‘रसायन फिज़’.
          </Text>
        </Card>
      </View>
      <View style={styles.allCardBox}>
        <Text style={styles.sectionTitle}>Material Required</Text>
        <Card>
          <Text style={styles.hindiQuestion}>
            क्या आपने सोचा है कि एक परखनली या टेस्ट ट्यूब में इन्द्रधनुष कैसे बन
            सकता है?
          </Text>
          <Text style={styles.hindiAns}>
            <Text style={styles.hindiAns}>
              अम्ल और क्षार का इस्तेमाल करके हम अलग-अलग{' '}
              <Text style={styles.latin}>pH</Text> के बैंड बनाएँगे…
            </Text>
            और बुलबुले बनते हुए देखेंगे—जिसे हम कहते हैं ‘रसायन फिज़’.
          </Text>

          <Text style={styles.heading}>6 बच्चों के प्रत्येक समूह के लिए:</Text>

          <View style={styles.row}>
            <View style={styles.dot} />
            <Text style={styles.item}>15 gm सोडियम कार्बोनेट</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.dot} />
            <Text style={styles.item}>
              75 मि.ली. 0.1 M एसीटिक एसिड या 75 मि.ली. सिरका
            </Text>
          </View>
          <View style={styles.row}>
            <View style={styles.dot} />
            <Text style={styles.item}>30 मि.ली. सबाबहार का रस</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.dot} />
            <Text style={styles.item}>100 मि.ली. DI पानी</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.dot} />
            <Text style={styles.item}>15 प्लास्टिक ड्रॉपर</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.dot} />
            <Text style={styles.item}>30 मि.ली. यूनिवर्सल इंडिकेटर</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.dot} />
            <Text style={styles.item}>2 काँच की परखनलियाँ (टेस्ट ट्यूब्स)</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.dot} />
            <Text style={styles.item}>1 परखनली (टेस्ट ट्यूब) स्टैंड</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.dot} />
            <Text style={styles.item}>1 स्पैचुला या चम्मच</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.dot} />
            <Text style={styles.item}>1 रंगीन प्रिंट – संकेतक pH चार्ट</Text>
          </View>
          <View style={styles.imagebox}>
            <Image
              source={require('../../assets/Images/session-activity-image.png')}
              style={styles.sessionActivityImage}
              resizeMode="contain"
            />
          </View>
        </Card>
      </View>
    </View>
  );
}
