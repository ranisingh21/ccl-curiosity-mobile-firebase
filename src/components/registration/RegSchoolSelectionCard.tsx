import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../../styles/registration/reg-school-selection-card";
import NextButton from "./NextButton";

interface RegSchoolSelectionCardProps {
  onNext: () => void;
  onBack: () => void;
}
const RegSchoolSelectionCard: React.FC<RegSchoolSelectionCardProps> = ({ onNext,  onBack})=> {
  return (
    <View style={styles.card}>

      <View style={styles.headerBox}>
        <TouchableOpacity  onPress={onBack} style={styles.headerIconWrapper}
        >
          <Image
            source={require("../../assets/Images/Icon.png")}
            style={styles.headerIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>KGBV School</Text>
      </View>

      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.bannerBox}>
			<View style={styles.bannerimgetextbox}>
				<View style={styles.bannerRowTop}>
					<View style={styles.bannerIconWrapper}>
						<Image
						source={require("../../assets/Images/Discussion.png")}
						style={styles.bannerIcon}
						resizeMode="cover"
						/>
					</View>
				</View>
				<View style={styles.bannerRowBottom}>
					<Text style={styles.bannerTextTop}>अगर प्रदेश, जिला या स्कूल का नाम लिस्ट </Text>
					<View style={styles.bannerRowBottomBox}>
					<Text style={styles.bannerTextBottom}>में नहीं है</Text>
					<View style={styles.bannerArrowWrapper}>
						<Image
						source={require("../../assets/Images/thanksarrow.png")}
						style={styles.bannerArrow}
						resizeMode="cover"
						/>
					</View>
					</View>
				</View>
			</View>
        </TouchableOpacity>

        <View >
          <Text style={styles.fieldLabel}>State</Text>
          <View style={styles.fieldBox}>
            <Text style={styles.fieldValue}>Punjab</Text>
            <View style={styles.dropdownIconWrapper}>
              <Image
                source={require("../../assets/Images/downArrowIcon.png")}
                style={styles.dropdownIcon}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>

        <View >
          <Text style={styles.fieldLabel}>District</Text>
          <View style={styles.fieldBox}>
            <Text style={styles.fieldValue}>Bathinda</Text>
            <View style={styles.dropdownIconWrapper}>
              <Image
                source={require("../../assets/Images/downArrowIcon.png")}
                style={styles.dropdownIcon}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>

        <View >
          <Text style={styles.fieldLabel}>School Name</Text>
          <View style={styles.fieldBoxLast}>
            <Text style={styles.fieldValue}>Sangat Guda</Text>
            <View style={styles.dropdownIconWrapper}>
              <Image
                source={require("../../assets/Images/downArrowIcon.png")}
                style={styles.dropdownIcon}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

        <View style={styles.nextButtonWrapper}>
          <NextButton  onPress={onNext}/>
        </View>
      </View>
    </View>
  );
};

export default RegSchoolSelectionCard;







