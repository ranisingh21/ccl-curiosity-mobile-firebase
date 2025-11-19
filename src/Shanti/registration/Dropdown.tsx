import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import type { View as RNView } from "react-native";

type SimpleDropdownProps = {
  label: string;
  items: string[];
  value?: string;                 
  placeholder?: string;          
  onSelect: (name: string) => void;

  requireBeforeOpen?: () => boolean;

 
  labelStyle: any;                
  triggerStyle: any;              
  valueTextStyle: any;            
  iconWrapperStyle: any;          
  iconStyle: any;                 
  iconSource: any;               

  zIndex?: number;
  panelHeight?: number;          
  panelWidthRatio?: number;       
};

const SimpleDropdown: React.FC<SimpleDropdownProps> = ({
  label,
  items,
  value,
  placeholder = "Select...",
  onSelect,
  requireBeforeOpen,
  labelStyle,
  triggerStyle,
  valueTextStyle,
  iconWrapperStyle,
  iconStyle,
  iconSource,
  zIndex = 1,
  panelHeight = 300,
  panelWidthRatio = 0.5,
}) => {
  const anchorRef = useRef<RNView | null>(null);
  const [visible, setVisible] = useState(false);
  const [panelTop, setPanelTop] = useState(56);
  const [panelRight, setPanelRight] = useState(10);
  const [panelWidth, setPanelWidth] = useState(
    Math.round(Dimensions.get("window").width * panelWidthRatio)
  );

  const open = () => {
    if (requireBeforeOpen && !requireBeforeOpen()) return;
    anchorRef.current?.measureInWindow?.((x, y, w, h) => {
      const win = Dimensions.get("window");
      const rightFromScreen = Math.max(0, win.width - (x + w));
      setPanelTop(y + h);
      setPanelRight(rightFromScreen);
      setPanelWidth(Math.round(win.width * panelWidthRatio));
      setVisible(true);
    });
  };

  const close = () => setVisible(false);

  const handleSelect = (name: string) => {
    onSelect(name);
    close();
  };

  return (
    <View style={{ position: "relative", zIndex, overflow: "visible" }}>
      <Text style={labelStyle}>{label}</Text>

      <TouchableOpacity
        ref={anchorRef}
        onPress={open}
        style={triggerStyle}
        activeOpacity={0.8}
      >
        <Text style={valueTextStyle}>{value || placeholder}</Text>
        {iconSource ? (
          <View style={iconWrapperStyle}>
            <Image source={iconSource} style={iconStyle} resizeMode="cover" />
          </View>
        ) : null}
      </TouchableOpacity>

      {/* Panel */}
      <Modal visible={visible} transparent animationType="fade" onRequestClose={close}>
        <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={close}>
          <View
            style={{
              position: "absolute",
              top: panelTop,
              right: panelRight,
              width: panelWidth,
              height: panelHeight,
              backgroundColor: "#fff",
              borderRadius: 10,
              overflow: "hidden",
              zIndex: 9999,
              elevation: 16,
              shadowColor: "#000",
              shadowOpacity: 0.2,
              shadowRadius: 10,
              shadowOffset: { width: 0, height: 6 },
            }}
            pointerEvents="auto"
          >
            <FlatList
              data={items}
              keyExtractor={(item) => item}
              showsVerticalScrollIndicator
              contentContainerStyle={{ paddingVertical: 4 }}
              renderItem={({ item }) => {
                const active = item === value;
                return (
                  <TouchableOpacity
                    onPress={() => handleSelect(item)}
                    activeOpacity={0.7}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingVertical: 12,
                      paddingHorizontal: 16,
                      backgroundColor: active ? "#F5F7FF" : "#FFF",
                      borderBottomWidth: 1,
                      borderBottomColor: "#EAEAEA",
                    }}
                  >
                    <Text style={{ fontSize: 16, color: active ? "#1a73e8" : "#333" }}>
                      {item}
                    </Text>
                    {active ? <Text style={{ fontSize: 16, color: "#1a73e8" }}>✓</Text> : null}
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default SimpleDropdown;
