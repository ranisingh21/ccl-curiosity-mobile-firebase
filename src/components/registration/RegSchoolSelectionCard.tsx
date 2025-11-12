import React, { useContext, useMemo } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import styles from "../../styles/registration/reg-school-selection-card";
import NextButton from "./NextButton";
import { LocationDataContext } from "../../api/api";
import SimpleDropdown from "./Dropdown";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

export default function RegSchoolSelectionCard({ onNext, onBack }: Props) {
  const ctx = useContext(LocationDataContext);
  if (!ctx) return null;

  const {
    states,
    districts,
    schools,
    selectedState,
    selectedDistrict,
    selectedSchool,
    selectState,
    selectDistrict,
    selectSchool,
  } = ctx;

  const stateNames = useMemo(() => states.map((s) => s.name), [states]);
  const districtNames = useMemo(
    () => districts.map((d) => d.name),
    [districts]
  );
  const schoolNames = useMemo(() => schools.map((s) => s.name), [schools]);

  const handleSelectState = (name: string) => {
    const obj = states.find((s) => s.name === name);
    if (obj) selectState(obj);
  };
  const handleSelectDistrict = (name: string) => {
    const obj = districts.find((d) => d.name === name);
    if (obj) selectDistrict(obj);
  };
  const handleSelectSchool = (name: string) => {
    const obj = schools.find((s) => s.name === name);
    if (obj) selectSchool(obj);
  };

  const requireState = () => {
    if (!selectedState) {
      Alert.alert("Select State", "Please select state first.");
      return false;
    }
    return true;
  };
  const requireDistrict = () => {
    if (!selectedDistrict) {
      Alert.alert("Select District", "Please select state and district first.");
      return false;
    }
    return true;
  };

  const canProceed = !!(selectedState && selectedDistrict && selectedSchool);
  return (
    <View style={[styles.card, { overflow: "visible" }]}>
      {/* Header (unchanged) */}
      <View style={styles.headerBox}>
        <TouchableOpacity style={styles.headerIconWrapper} onPress={onBack}>
          <Image
            source={require("../../assets/Images/Icon.png")}
            style={styles.headerIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>KGBV School</Text>
      </View>

      <View style={[styles.contentContainer, { overflow: "visible" }]}>
        {/* Banner (unchanged) */}
        <TouchableOpacity style={styles.bannerBox} activeOpacity={0.8}>
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
              <Text style={styles.bannerTextTop}>
                अगर प्रदेश, जिला या स्कूल का नाम लिस्ट{" "}
              </Text>
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

        {/* ---- STATE ---- */}
        <SimpleDropdown
          label="State"
          items={stateNames}
          value={selectedState?.name}
          placeholder="Select state"
          onSelect={handleSelectState}
          requireBeforeOpen={undefined}
          labelStyle={styles.fieldLabel}
          triggerStyle={styles.fieldBox}
          valueTextStyle={styles.fieldValue}
          iconWrapperStyle={styles.dropdownIconWrapper}
          iconStyle={styles.dropdownIcon}
          iconSource={require("../../assets/Images/downArrowIcon.png")}
          zIndex={3}
        />

        {/* ---- DISTRICT ---- */}
        <SimpleDropdown
          label="District"
          items={districtNames}
          value={selectedDistrict?.name}
          placeholder={selectedState ? "Select district" : "Select state first"}
          onSelect={handleSelectDistrict}
          requireBeforeOpen={requireState}
          labelStyle={styles.fieldLabel}
          triggerStyle={styles.fieldBox}
          valueTextStyle={styles.fieldValue}
          iconWrapperStyle={styles.dropdownIconWrapper}
          iconStyle={styles.dropdownIcon}
          iconSource={require("../../assets/Images/downArrowIcon.png")}
          zIndex={2}
        />

        {/* ---- SCHOOL ---- */}
        <SimpleDropdown
          label="School Name"
          items={schoolNames}
          value={selectedSchool?.name}
          placeholder={
            selectedDistrict ? "Select school" : "Select district first"
          }
          onSelect={handleSelectSchool}
          requireBeforeOpen={requireDistrict}
          labelStyle={styles.fieldLabel}
          triggerStyle={styles.fieldBoxLast}
          valueTextStyle={styles.fieldValue}
          iconWrapperStyle={styles.dropdownIconWrapper}
          iconStyle={styles.dropdownIcon}
          iconSource={require("../../assets/Images/downArrowIcon.png")}
          zIndex={1}
        />

        {/* Next */}
        {/* <View style={styles.nextButtonWrapper}>
          <NextButton onPress={onNext} disabled={!canProceed} />{" "}
        </View> */}
        <View style={styles.nextButtonWrapper}>
  <NextButton onPress={onNext} disabled={!canProceed} />
</View>

      </View>
    </View>
  );
}

// import React, { useContext, useRef, useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   FlatList,
//   Modal,
//   Dimensions,
//   Alert,
// } from "react-native";
// import type { View as RNView } from "react-native";
// import styles from "../../styles/registration/reg-school-selection-card";
// import NextButton from "./NextButton";
// import { LocationDataContext } from "../../api/api";

// // ---- Props ----
// type Props = {
//   onNext: () => void;
//   onBack: () => void;
// };

// const PANEL_WIDTH_RATIO = 0.5;

// export default function RegSchoolSelectionCard({ onNext, onBack }: Props) {
//   const ctx = useContext(LocationDataContext);
//   if (!ctx) return null;

//   const {
//     states,
//     districts,
//     schools,
//     selectedState,
//     selectedDistrict,
//     selectedSchool,
//     selectState,
//     selectDistrict,
//     selectSchool,
//   } = ctx;

//   // Dropdown visibility
//   const [showStates, setShowStates] = useState(false);
//   const [showDistricts, setShowDistricts] = useState(false);
//   const [showSchools, setShowSchools] = useState(false);

//   // Panel positioning
//   const [panelTop, setPanelTop] = useState<number>(56);
//   const [panelRight, setPanelRight] = useState<number>(10);
//   const [panelWidth, setPanelWidth] = useState<number>(
//     Math.round(Dimensions.get("window").width * PANEL_WIDTH_RATIO)
//   );

//   // refs for anchors
//   const stateRef = useRef<RNView | null>(null);
//   const districtRef = useRef<RNView | null>(null);
//   const schoolRef = useRef<RNView | null>(null);

//   // position dropdown near tapped field
//   function openDropdownAt(
//     ref: React.RefObject<RNView | null>,
//     setVisible: (v: boolean) => void
//   ) {
//     ref.current?.measureInWindow?.((x, y, w, h) => {
//       const win = Dimensions.get("window");
//       const rightFromScreen = Math.max(0, win.width - (x + w));
//       setPanelTop(y + h);
//       setPanelRight(rightFromScreen);
//       setPanelWidth(Math.round(win.width * PANEL_WIDTH_RATIO));
//       setVisible(true);
//     });
//   }

//   // handlers (close modal + call context selectors)
//   const handleSelectState = (name: string) => {
//     const obj = states.find((s) => s.name === name);
//     if (obj) selectState(obj);
//     setShowStates(false);
//   };

//   const handleSelectDistrict = (name: string) => {
//     const obj = districts.find((d) => d.name === name);
//     if (obj) selectDistrict(obj);
//     setShowDistricts(false);
//   };

//   const handleSelectSchool = (name: string) => {
//     const obj = schools.find((s) => s.name === name);
//     if (obj) selectSchool(obj);
//     setShowSchools(false);
//     console.log("selected school:", obj);
//   };

//   // list data for FlatList (names only)
//   const stateNames = states.map((s) => s.name);
//   const districtNames = districts.map((d) => d.name);
//   const schoolNames = schools.map((s) => s.name);

//   const requireSelected = (condition: boolean, title: string, message: string) => {
//   if (!condition) {
//     Alert.alert(title, message);
//     return false;
//   }
//   return true;
// };
//   return (
//     <View style={[styles.card, { overflow: "visible" }]}>
//       {/* Header */}
//       <View style={styles.headerBox}>
//         <TouchableOpacity style={styles.headerIconWrapper} onPress={onBack}>
//           <Image
//             source={require("../../assets/Images/Icon.png")}
//             style={styles.headerIcon}
//             resizeMode="contain"
//           />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>KGBV School</Text>
//       </View>

//       {/* Content */}
//       <View style={[styles.contentContainer, { overflow: "visible" }]}>
//         {/* Banner */}
//         <TouchableOpacity style={styles.bannerBox} activeOpacity={0.8}>
//           <View style={styles.bannerimgetextbox}>
//             <View style={styles.bannerRowTop}>
//               <View style={styles.bannerIconWrapper}>
//                 <Image
//                   source={require("../../assets/Images/Discussion.png")}
//                   style={styles.bannerIcon}
//                   resizeMode="cover"
//                 />
//               </View>
//             </View>
//             <View style={styles.bannerRowBottom}>
//               <Text style={styles.bannerTextTop}>
//                 अगर प्रदेश, जिला या स्कूल का नाम लिस्ट{" "}
//               </Text>
//               <View style={styles.bannerRowBottomBox}>
//                 <Text style={styles.bannerTextBottom}>में नहीं है</Text>
//                 <View style={styles.bannerArrowWrapper}>
//                   <Image
//                     source={require("../../assets/Images/thanksarrow.png")}
//                     style={styles.bannerArrow}
//                     resizeMode="cover"
//                   />
//                 </View>
//               </View>
//             </View>
//           </View>
//         </TouchableOpacity>

//         {/* ---- STATE ---- */}
//         <View style={{ position: "relative", zIndex: 3, overflow: "visible" }}>
//           <Text style={styles.fieldLabel}>State</Text>
//           <TouchableOpacity
//             ref={stateRef}
//             onPress={() => openDropdownAt(stateRef, setShowStates)}
//             style={styles.fieldBox}
//             activeOpacity={0.8}
//           >
//             <Text style={styles.fieldValue}>
//               {selectedState?.name || "Select state"}
//             </Text>
//             <View style={styles.dropdownIconWrapper}>
//               <Image
//                 source={require("../../assets/Images/downArrowIcon.png")}
//                 style={styles.dropdownIcon}
//                 resizeMode="cover"
//               />
//             </View>
//           </TouchableOpacity>

//           {/* STATES DROPDOWN */}
//           <Modal
//             visible={showStates}
//             transparent
//             animationType="fade"
//             onRequestClose={() => setShowStates(false)}
//           >
//             <TouchableOpacity
//               style={{ flex: 1 }}
//               activeOpacity={1}
//               onPress={() => setShowStates(false)}
//             >
//               <View
//                 style={{
//                   position: "absolute",
//                   top: panelTop,
//                   right: panelRight,
//                   width: panelWidth,
//                   height: 300,
//                   backgroundColor: "#fff",
//                   borderRadius: 10,
//                   overflow: "hidden",
//                   zIndex: 9999,
//                   elevation: 16,
//                   shadowColor: "#000",
//                   shadowOpacity: 0.2,
//                   shadowRadius: 10,
//                   shadowOffset: { width: 0, height: 6 },
//                 }}
//                 pointerEvents="auto"
//               >
//                 <FlatList
//                   data={stateNames}
//                   keyExtractor={(item) => item}
//                   showsVerticalScrollIndicator
//                   contentContainerStyle={{ paddingVertical: 4 }}
//                   renderItem={({ item }) => (
//                     <TouchableOpacity
//                       onPress={() => handleSelectState(item)}
//                       activeOpacity={0.7}
//                       style={{
//                         flexDirection: "row",
//                         alignItems: "center",
//                         justifyContent: "space-between",
//                         paddingVertical: 12,
//                         paddingHorizontal: 16,
//                         backgroundColor:
//                           item === selectedState?.name ? "#F5F7FF" : "#FFF",
//                         borderBottomWidth: 1,
//                         borderBottomColor: "#EAEAEA",
//                       }}
//                     >
//                       <Text
//                         style={{
//                           fontSize: 16,
//                           color:
//                             item === selectedState?.name ? "#1a73e8" : "#333",
//                         }}
//                       >
//                         {item}
//                       </Text>
//                       {item === selectedState?.name ? (
//                         <Text style={{ fontSize: 16, color: "#1a73e8" }}>
//                           ✓
//                         </Text>
//                       ) : null}
//                     </TouchableOpacity>
//                   )}
//                 />
//               </View>
//             </TouchableOpacity>
//           </Modal>
//         </View>

//         {/* ---- DISTRICT ---- */}
//         <View style={{ position: "relative", zIndex: 2 }}>
//           <Text style={styles.fieldLabel}>District</Text>
//           <TouchableOpacity
//             ref={districtRef}
//             onPress={() => {
//   if (!requireSelected(!!selectedState, "Select State", "Please select state first.")) return;
//   openDropdownAt(districtRef, setShowDistricts);
// }}
//             style={styles.fieldBox}
//             activeOpacity={0.8}
//           >
//             <Text style={styles.fieldValue}>
//               {selectedDistrict?.name ||
//                 (selectedState ? "Select district" : "Select state first")}
//             </Text>
//             <View style={styles.dropdownIconWrapper}>
//               <Image
//                 source={require("../../assets/Images/downArrowIcon.png")}
//                 style={styles.dropdownIcon}
//                 resizeMode="cover"
//               />
//             </View>
//           </TouchableOpacity>

//           {/* DISTRICTS DROPDOWN */}
//           <Modal
//             visible={showDistricts}
//             transparent
//             animationType="fade"
//             onRequestClose={() => setShowDistricts(false)}
//           >
//             <TouchableOpacity
//               style={{ flex: 1 }}
//               activeOpacity={1}
//               onPress={() => setShowDistricts(false)}
//             >
//               <View
//                 style={{
//                   position: "absolute",
//                   top: panelTop,
//                   right: panelRight,
//                   width: panelWidth,
//                   height: 300,
//                   backgroundColor: "#fff",
//                   borderRadius: 10,
//                   overflow: "hidden",
//                   zIndex: 9998,
//                   elevation: 16,
//                   shadowColor: "#000",
//                   shadowOpacity: 0.2,
//                   shadowRadius: 10,
//                   shadowOffset: { width: 0, height: 6 },
//                 }}
//                 pointerEvents="auto"
//               >
//                 <FlatList
//                   data={districtNames}
//                   keyExtractor={(item) => item}
//                   showsVerticalScrollIndicator
//                   contentContainerStyle={{ paddingVertical: 4 }}
//                   renderItem={({ item }) => (
//                     <TouchableOpacity
//                       onPress={() => handleSelectDistrict(item)}
//                       activeOpacity={0.7}
//                       style={{
//                         flexDirection: "row",
//                         alignItems: "center",
//                         justifyContent: "space-between",
//                         paddingVertical: 12,
//                         paddingHorizontal: 16,
//                         backgroundColor:
//                           item === selectedDistrict?.name ? "#F5F7FF" : "#FFF",
//                         borderBottomWidth: 1,
//                         borderBottomColor: "#EAEAEA",
//                       }}
//                     >
//                       <Text
//                         style={{
//                           fontSize: 16,
//                           color:
//                             item === selectedDistrict?.name
//                               ? "#1a73e8"
//                               : "#333",
//                         }}
//                       >
//                         {item}
//                       </Text>
//                       {item === selectedDistrict?.name ? (
//                         <Text style={{ fontSize: 16, color: "#1a73e8" }}>
//                           ✓
//                         </Text>
//                       ) : null}
//                     </TouchableOpacity>
//                   )}
//                 />
//               </View>
//             </TouchableOpacity>
//           </Modal>
//         </View>

//         {/* ---- SCHOOL ---- */}
//         <View style={{ position: "relative", zIndex: 1 }}>
//           <Text style={styles.fieldLabel}>School Name</Text>
//           <View ref={schoolRef} collapsable={false}>
//             <TouchableOpacity
//              onPress={() => {
//   if (!requireSelected(!!selectedDistrict, "Select District", "Please select state and district first.")) return;
//   openDropdownAt(schoolRef, setShowSchools);
// }}
//               style={styles.fieldBoxLast}
//               activeOpacity={0.8}
//             >
//               <Text style={styles.fieldValue}>
//                 {selectedSchool?.name ||
//                   (selectedDistrict
//                     ? "Select school"
//                     : "Select district first")}
//               </Text>
//               <View style={styles.dropdownIconWrapper}>
//                 <Image
//                   source={require("../../assets/Images/downArrowIcon.png")}
//                   style={styles.dropdownIcon}
//                   resizeMode="contain"
//                 />
//               </View>
//             </TouchableOpacity>
//           </View>

//           {/* SCHOOLS DROPDOWN */}
//           <Modal
//             visible={showSchools}
//             transparent
//             animationType="fade"
//             onRequestClose={() => setShowSchools(false)}
//           >
//             <TouchableOpacity
//               style={{ flex: 1 }}
//               activeOpacity={1}
//               onPress={() => setShowSchools(false)}
//             >
//               <View
//                 style={{
//                   position: "absolute",
//                   top: panelTop,
//                   right: panelRight,
//                   width: panelWidth,
//                   height: 300,
//                   backgroundColor: "#fff",
//                   borderRadius: 10,
//                   overflow: "hidden",
//                   zIndex: 9997,
//                   elevation: 16,
//                   shadowColor: "#000",
//                   shadowOpacity: 0.2,
//                   shadowRadius: 10,
//                   shadowOffset: { width: 0, height: 6 },
//                 }}
//                 pointerEvents="auto"
//               >
//                 {schoolNames.length === 0 ? (
//                   <View style={{ padding: 16 }}>
//                     <Text>
//                       {selectedDistrict
//                         ? "No schools found"
//                         : "Select district first"}
//                     </Text>
//                   </View>
//                 ) : (
//                   <FlatList
//                     data={schoolNames}
//                     keyExtractor={(item) => item}
//                     showsVerticalScrollIndicator
//                     contentContainerStyle={{ paddingVertical: 4 }}
//                     renderItem={({ item }) => (
//                       <TouchableOpacity
//                         onPress={() => handleSelectSchool(item)}
//                         activeOpacity={0.7}
//                         style={{
//                           flexDirection: "row",
//                           alignItems: "center",
//                           justifyContent: "space-between",
//                           paddingVertical: 12,
//                           paddingHorizontal: 16,
//                           backgroundColor:
//                             item === selectedSchool?.name ? "#F5F7FF" : "#FFF",
//                           borderBottomWidth: 1,
//                           borderBottomColor: "#EAEAEA",
//                         }}
//                       >
//                         <Text
//                           style={{
//                             fontSize: 16,
//                             color:
//                               item === selectedSchool?.name
//                                 ? "#1a73e8"
//                                 : "#333",
//                           }}
//                         >
//                           {item}
//                         </Text>
//                         {item === selectedSchool?.name ? (
//                           <Text style={{ fontSize: 16, color: "#1a73e8" }}>
//                             ✓
//                           </Text>
//                         ) : null}
//                       </TouchableOpacity>
//                     )}
//                   />
//                 )}
//               </View>
//             </TouchableOpacity>
//           </Modal>
//         </View>

//         {/* Next Button */}
//         <View style={styles.nextButtonWrapper}>
//           <NextButton onPress={onNext} />
//         </View>
//       </View>
//     </View>
//   );
// }

// import React, { useContext } from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import styles from "../../styles/registration/reg-school-selection-card";
// import NextButton from "./NextButton";
// import { LocationDataContext } from "../../api/location";

// // ✅ 1️⃣ Define props type BEFORE component
// type Props = {
//   onNext: () => void;
//   onBack: () => void;
// };

// // ✅ 2️⃣ Use that type in your component definition
// export default function RegSchoolSelectionCard({ onNext, onBack }: Props) {
//   const ctx = useContext(LocationDataContext);
//   if (!ctx) return null;

//   const {
//     states,
//     districts,
//     schools,
//     selectState,
//     selectDistrict,
//     selectSchool,
//     selectedState,
//     selectedDistrict,
//     selectedSchool,
//   } = ctx;

//   return (
//     <View style={styles.card}>
//       <Text style={styles.fieldLabel}>State</Text>
//       {states.map((s: any) => (
//         <TouchableOpacity key={s.id} onPress={() => selectState(s)}>
//           <Text>{s.name}</Text>
//         </TouchableOpacity>
//       ))}

//       <Text style={styles.fieldLabel}>District</Text>
//       {districts.map((d: any) => (
//         <TouchableOpacity key={d.id} onPress={() => selectDistrict(d)}>
//           <Text>{d.name}</Text>
//         </TouchableOpacity>
//       ))}

//       <Text style={styles.fieldLabel}>School</Text>
//       {schools.map((sc: any) => (
//         <TouchableOpacity key={sc.id} onPress={() => selectSchool(sc)}>
//           <Text>{sc.name}</Text>
//         </TouchableOpacity>
//       ))}

//       <NextButton onPress={onNext} />
//     </View>
//   );
// }

// import React, { useEffect, useRef, useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   FlatList,
//   Modal,
//   Dimensions,
// } from "react-native";
// import styles from "../../styles/registration/reg-school-selection-card";
// import type { View as RNView } from "react-native";

// import NextButton from "./NextButton";
// import axios from "axios";

// type Props = { onNext: () => void; onBack: () => void };

// type StateItem = {
//   id: number;
//   name: string;
//   createdAt: string;
//   updatedAt: string;
// };
// type DistrictItem = { id: number; name: string; stateId: number };
// type SchoolItem = { id: number; name: string; blockId: number };

// const PANEL_WIDTH_RATIO = 0.5;
// const winW = Dimensions.get("window").width;

// export default function RegSchoolSelectionCard({ onBack, onNext }: Props) {
//   const [states, setStates] = useState<string[]>([]);
//   const [stateNameToId, setStateNameToId] = useState<Record<string, number>>(
//     {}
//   );
//   const [selectedState, setSelectedState] = useState<string>("");

//   // ---- DISTRICTS ----
//   const [districts, setDistricts] = useState<string[]>([]);
//   const [districtNameToId, setDistrictNameToId] = useState<
//     Record<string, number>
//   >({});
//   const [selectedDistrict, setSelectedDistrict] = useState<string>("");

//   // ---- SCHOOLS ----
//   const [schools, setSchools] = useState<string[]>([]);
//   const [selectedSchool, setSelectedSchool] = useState<string>("");

//   // ---- DROPDOWN visibility ----
//   const [showStates, setShowStates] = useState(false);
//   const [showDistricts, setShowDistricts] = useState(false);
//   const [showSchools, setShowSchools] = useState(false);

//   // ---- Dropdown panel positioning (right-bottom of trigger) ----
//   // const [panelTop, setPanelTop] = useState<number>(56);
//   // const [panelRight, setPanelRight] = useState<number>(10);
//   // const [panelWidth, setPanelWidth] = useState<number>(
//   //   Math.round(winW * PANEL_WIDTH_RATIO)
//   // );

//   const stateRef = useRef<RNView | null>(null);
//   const districtRef = useRef<RNView | null>(null);
//   const schoolRef = useRef<RNView | null>(null);

//   function openDropdownAt(
//     ref: React.RefObject<RNView | null>,
//     setVisible: (v: boolean) => void
//   ) {
//     ref.current?.measureInWindow?.((x, y, w, h) => {
//       // const { width: winW2 } = Dimensions.get("window");
//       // const rightFromScreen = Math.max(0, winW2 - (x + w));
//       setVisible(true);
//     });
//   }

//   useEffect(() => {
//     axios
//       .get<StateItem[]>("https://cclplayground.justuju.in/states", {
//         headers: { Accept: "application/json" },
//       })
//       .then((res) => {
//         const arr = Array.isArray(res.data) ? res.data : [];
//         const names = arr.map((s) => s.name).filter(Boolean);
//         const map: Record<string, number> = {};
//         arr.forEach((s) => (map[s.name] = s.id));
//         setStates(names);
//         setStateNameToId(map);
//       })
//       .catch((e) =>
//         console.log("States API error:", e?.response?.data || e?.message || e)
//       );
//   }, []);

//   console.log(states, "states here");

//   const fetchDistricts = (stateId: number) => {
//     axios
//       .get<DistrictItem[]>(
//         `https://cclplayground.justuju.in/states/${stateId}/districts`,
//         {
//           headers: { Accept: "application/json" },
//         }
//       )
//       .then((res) => {
//         const arr = Array.isArray(res.data) ? res.data : [];
//         const names = arr.map((d) => d.name).filter(Boolean);
//         const map: Record<string, number> = {};
//         arr.forEach((d) => (map[d.name] = d.id));
//         setDistricts(names);
//         setDistrictNameToId(map);
//       })
//       .catch((e) =>
//         console.log(
//           "Districts API error:",
//           e?.response?.data || e?.message || e
//         )
//       );
//   };

//   console.log(districts, "districts here");

//   const fetchSchools = (districtId: number) => {
//     axios
//       .get<SchoolItem[]>(
//         `https://cclplayground.justuju.in/districts/${districtId}/schools`,
//         {
//           headers: { Accept: "application/json" },
//         }
//       )
//       .then((res) => {
//         const arr = Array.isArray(res.data) ? res.data : [];
//         const names = arr.map((s) => s.name).filter(Boolean);
//         setSchools(names);
//       })
//       .catch((e) =>
//         console.log("Schools API error:", e?.response?.data || e?.message || e)
//       );
//   };

//   const handleSelectState = (name: string) => {
//     setSelectedState(name);
//     setShowStates(false);

//     setSelectedDistrict("");
//     setDistricts([]);
//     setSelectedSchool("");
//     setSchools([]);

//     const id = stateNameToId[name];
//     if (id != null) fetchDistricts(id);
//   };

//   const handleSelectDistrict = (name: string) => {
//     setSelectedDistrict(name);
//     setShowDistricts(false);

//     setSchools([]);
//     setSelectedSchool("");

//     const id = districtNameToId[name];
//     if (id != null) fetchSchools(id);
//   };

//   const handleSelectSchool = (name: string) => {
//     setSelectedSchool(name);
//     setShowSchools(false);
//   };

//   return (
//     <View style={[styles.card, { overflow: "visible" }]}>
//       <View style={styles.headerBox}>
//         <TouchableOpacity style={styles.headerIconWrapper} onPress={onBack}>
//           <Image
//             source={require("../../assets/Images/Icon.png")}
//             style={styles.headerIcon}
//             resizeMode="contain"
//           />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>KGBV School</Text>
//       </View>
//       <View style={[styles.contentContainer, { overflow: "visible" }]}>
//         <TouchableOpacity style={styles.bannerBox}>
//           <View style={styles.bannerimgetextbox}>
//             <View style={styles.bannerRowTop}>
//               <View style={styles.bannerIconWrapper}>
//                 <Image
//                   source={require("../../assets/Images/Discussion.png")}
//                   style={styles.bannerIcon}
//                   resizeMode="cover"
//                 />
//               </View>
//             </View>
//             <View style={styles.bannerRowBottom}>
//               <Text style={styles.bannerTextTop}>
//                 अगर प्रदेश, जिला या स्कूल का नाम लिस्ट{" "}
//               </Text>
//               <View style={styles.bannerRowBottomBox}>
//                 <Text style={styles.bannerTextBottom}>में नहीं है</Text>
//                 <View style={styles.bannerArrowWrapper}>
//                   <Image
//                     source={require("../../assets/Images/thanksarrow.png")}
//                     style={styles.bannerArrow}
//                     resizeMode="cover"
//                   />
//                 </View>
//               </View>
//             </View>
//           </View>
//         </TouchableOpacity>

//         <View style={{ position: "relative", zIndex: 1, overflow: "visible" }}>
//           <Text style={styles.fieldLabel}>State</Text>
//           <TouchableOpacity
//             ref={stateRef}
//             onPress={() => openDropdownAt(stateRef, setShowStates)}
//             style={styles.fieldBox}
//             activeOpacity={0.8}
//           >
//             <Text style={styles.fieldValue}>
//               {selectedState || "Select state"}
//             </Text>
//             <View style={styles.dropdownIconWrapper}>
//               <Image
//                 source={require("../../assets/Images/downArrowIcon.png")}
//                 style={styles.dropdownIcon}
//                 resizeMode="cover"
//               />
//             </View>
//           </TouchableOpacity>

//           <Modal
//             visible={showStates}
//             transparent
//             animationType="fade"
//             onRequestClose={() => setShowStates(false)}
//           >
//             <TouchableOpacity
//               style={{ flex: 1 }}
//               activeOpacity={1}
//               onPress={() => setShowStates(false)}
//             >
//               <View
//                 style={{
//                   position: "absolute",
//                   top: 400,
//                   right: 10,
//                   width: "50%",
//                   height: 300,
//                   backgroundColor: "#fff",
//                   borderRadius: 10,
//                   overflow: "hidden",
//                   zIndex: 9999,
//                   elevation: 16,
//                   shadowColor: "#000",
//                   shadowOpacity: 0.2,
//                   shadowRadius: 10,
//                   shadowOffset: { width: 0, height: 6 },
//                 }}
//                 pointerEvents="auto"
//               >
//                 <FlatList
//                   data={states}
//                   keyExtractor={(item) => item}
//                   showsVerticalScrollIndicator
//                   contentContainerStyle={{ paddingVertical: 4 }}
//                   renderItem={({ item }) => (
//                     <TouchableOpacity
//                       onPress={() => handleSelectState(item)}
//                       activeOpacity={0.7}
//                       style={{
//                         flexDirection: "row",
//                         alignItems: "center",
//                         justifyContent: "space-between",
//                         paddingVertical: 12,
//                         paddingHorizontal: 16,
//                         backgroundColor:
//                           item === selectedState ? "#F5F7FF" : "#FFF",
//                         borderBottomWidth: 1,
//                         borderBottomColor: "#EAEAEA",
//                       }}
//                     >
//                       <Text
//                         style={{
//                           fontSize: 16,
//                           color: item === selectedState ? "#1a73e8" : "#333",
//                         }}
//                       >
//                         {item}
//                       </Text>
//                       {item === selectedState ? (
//                         <Text style={{ fontSize: 16, color: "#1a73e8" }}>
//                           ✓
//                         </Text>
//                       ) : null}
//                     </TouchableOpacity>
//                   )}
//                 />
//               </View>
//             </TouchableOpacity>
//           </Modal>
//         </View>

//         {/* --- DISTRICT --- */}
//         <View>
//           <Text style={styles.fieldLabel}>District</Text>
//           <TouchableOpacity
//             ref={districtRef}
//             onPress={() => openDropdownAt(districtRef, setShowDistricts)}
//             style={styles.fieldBox}
//             activeOpacity={0.8}
//           >
//             <Text style={styles.fieldValue}>
//               {selectedDistrict ||
//                 (selectedState ? "Select district" : "Select state first")}
//             </Text>
//             <View style={styles.dropdownIconWrapper}>
//               <Image
//                 source={require("../../assets/Images/downArrowIcon.png")}
//                 style={styles.dropdownIcon}
//                 resizeMode="cover"
//               />
//             </View>
//           </TouchableOpacity>

//           <Modal
//             visible={showDistricts}
//             transparent
//             animationType="fade"
//             onRequestClose={() => setShowDistricts(false)}
//           >
//             <TouchableOpacity
//               style={{ flex: 1 }}
//               activeOpacity={1}
//               onPress={() => setShowDistricts(false)}
//             >
//               <View
//                 style={{
//                   position: "absolute",
//                   top: 400,
//                   right: 10,
//                   width: "50%",
//                   height: 300,
//                   backgroundColor: "#fff",
//                   borderRadius: 10,
//                   overflow: "hidden",
//                   zIndex: 9999,
//                   elevation: 16,
//                   shadowColor: "#000",
//                   shadowOpacity: 0.2,
//                   shadowRadius: 10,
//                   shadowOffset: { width: 0, height: 6 },
//                 }}
//                 pointerEvents="auto"
//               >
//                 <FlatList
//                   data={districts}
//                   keyExtractor={(item) => item}
//                   showsVerticalScrollIndicator
//                   contentContainerStyle={{ paddingVertical: 4 }}
//                   renderItem={({ item }) => (
//                     <TouchableOpacity
//                       onPress={() => handleSelectDistrict(item)}
//                       activeOpacity={0.7}
//                       style={{
//                         flexDirection: "row",
//                         alignItems: "center",
//                         justifyContent: "space-between",
//                         paddingVertical: 12,
//                         paddingHorizontal: 16,
//                         backgroundColor:
//                           item === selectedDistrict ? "#F5F7FF" : "#FFF",
//                         borderBottomWidth: 1,
//                         borderBottomColor: "#EAEAEA",
//                       }}
//                     >
//                       <Text
//                         style={{
//                           fontSize: 16,
//                           color: item === selectedDistrict ? "#1a73e8" : "#333",
//                         }}
//                       >
//                         {item}
//                       </Text>
//                       {item === selectedDistrict ? (
//                         <Text style={{ fontSize: 16, color: "#1a73e8" }}>
//                           ✓
//                         </Text>
//                       ) : null}
//                     </TouchableOpacity>
//                   )}
//                 />
//               </View>
//             </TouchableOpacity>
//           </Modal>
//         </View>

//         {/* --- SCHOOL --- */}
//         <View>
//           <Text style={styles.fieldLabel}>School Name</Text>

//           <View ref={schoolRef} collapsable={false}>
//             <TouchableOpacity
//               onPress={() => openDropdownAt(schoolRef, setShowSchools)}
//               style={styles.fieldBoxLast}
//               activeOpacity={0.8}
//             >
//               <Text style={styles.fieldValue}>
//                 {selectedSchool ||
//                   (selectedDistrict ? "Select school" : "Select block first")}
//               </Text>
//               <View style={styles.dropdownIconWrapper}>
//                 <Image
//                   source={require("../../assets/Images/downArrowIcon.png")}
//                   style={styles.dropdownIcon}
//                   resizeMode="contain"
//                 />
//               </View>
//             </TouchableOpacity>
//           </View>

//           {/* ✅ you were missing this Modal */}
//           <Modal
//             visible={showSchools}
//             transparent
//             animationType="fade"
//             onRequestClose={() => setShowSchools(false)}
//           >
//             <TouchableOpacity
//               style={{ flex: 1 }}
//               activeOpacity={1}
//               onPress={() => setShowSchools(false)}
//             >
//               <View
//                 style={{
//                   position: "absolute",
//                   top: 400,
//                   right: 10,
//                   width: "50%",
//                   height: 300,
//                   backgroundColor: "#fff",
//                   borderRadius: 10,
//                   overflow: "hidden",
//                   zIndex: 9999,
//                   elevation: 16,
//                   shadowColor: "#000",
//                   shadowOpacity: 0.2,
//                   shadowRadius: 10,
//                   shadowOffset: { width: 0, height: 6 },
//                 }}
//                 pointerEvents="auto"
//               >
//                 {schools.length === 0 ? (
//                   <View style={{ padding: 16 }}>
//                     <Text>
//                       {selectedDistrict
//                         ? "No schools found"
//                         : "Select block first"}
//                     </Text>
//                   </View>
//                 ) : (
//                   <FlatList
//                     data={schools}
//                     keyExtractor={(item) => item}
//                     showsVerticalScrollIndicator
//                     contentContainerStyle={{ paddingVertical: 4 }}
//                     renderItem={({ item }) => (
//                       <TouchableOpacity
//                         onPress={() => handleSelectSchool(item)}
//                         activeOpacity={0.7}
//                         style={{
//                           flexDirection: "row",
//                           alignItems: "center",
//                           justifyContent: "space-between",
//                           paddingVertical: 12,
//                           paddingHorizontal: 16,
//                           backgroundColor:
//                             item === selectedSchool ? "#F5F7FF" : "#FFF",
//                           borderBottomWidth: 1,
//                           borderBottomColor: "#EAEAEA",
//                         }}
//                       >
//                         <Text
//                           style={{
//                             fontSize: 16,
//                             color: item === selectedSchool ? "#1a73e8" : "#333",
//                           }}
//                         >
//                           {item}
//                         </Text>
//                         {item === selectedSchool ? (
//                           <Text style={{ fontSize: 16, color: "#1a73e8" }}>
//                             ✓
//                           </Text>
//                         ) : null}
//                       </TouchableOpacity>
//                     )}
//                   />
//                 )}
//               </View>
//             </TouchableOpacity>
//           </Modal>
//         </View>

//         {/* Next */}
//         <View style={styles.nextButtonWrapper}>
//           <NextButton onPress={onNext} />
//         </View>
//       </View>
//     </View>
//   );
// }
