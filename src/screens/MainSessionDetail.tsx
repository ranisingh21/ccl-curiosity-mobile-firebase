import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../styles/globalStyles";
import SessionHeader from "../Shanti/sessionDetails/SessionHeader";
import SessionFooter from "../Shanti/sessionDetails/SessionFooter";
import SessionDetailCard from "../Shanti/sessionDetails/SessionDetailCard";
import JoinSessionDesktop from "../Shanti/sessionDetails/JoinSessionDesktop";
import JoinSessionMobile from "../Shanti/sessionDetails/JoinSessionMobile";
import TaskListCard from "../Shanti/sessionDetails/TaskListCard";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { Session } from "../Shanti/sessionList/SessionRow";

// type SessionsStackParamList = {
//   SessionsList: undefined;
//   SessionDetail: { session: Session };
// };

// type Props = NativeStackScreenProps<SessionsStackParamList, "SessionDetail">;

// export default function SessionDetailScreen({ route, navigation }: Props) {
//   const { session } = route.params;

const SessionDetail: React.FC = () => {
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
export default SessionDetail;

