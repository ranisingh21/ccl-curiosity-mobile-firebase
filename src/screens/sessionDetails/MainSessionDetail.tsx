import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../../styles/globalStyles";
import SessionHeader from "./SessionHeader";
import SessionFooter from "./SessionFooter";
import SessionDetailCard from "./SessionDetailCard";
import JoinSessionDesktop from "./JoinSessionDesktop";
import JoinSessionMobile from "./JoinSessionMobile";
import TaskListCard from "./TaskListCard";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { Session } from "../sessionList/sessionRow";

type SessionsStackParamList = {
  SessionsList: undefined;
  SessionDetail: { session: Session };
};

type Props = NativeStackScreenProps<SessionsStackParamList, "SessionDetail">;

export default function SessionDetailScreen({ route, navigation }: Props) {
  const { session } = route.params;

  return (
    <ScrollView>
     <SafeAreaView style={globalStyles.safe}>
        <SessionHeader />

         <View style={globalStyles.bodyContainer}>
            <SessionDetailCard />
            <View style={globalStyles.joinSessionDevices}>
              <JoinSessionDesktop />
              <JoinSessionMobile />
            </View>
            <TaskListCard />
          </View>
          <SessionFooter /> 
        </SafeAreaView>
      </ScrollView>
  );
}
