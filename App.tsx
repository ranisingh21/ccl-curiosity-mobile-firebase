// App.tsx
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/screens/navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}

// App.tsx
// import React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { Text } from 'react-native';  // Import the Text component from React Native
// import AppNavigator from './src/screens/navigation';
// import { SIZE_MATTERS_BASE_WIDTH, SIZE_MATTERS_BASE_HEIGHT } from '@env';  // Import environment variables

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       {/* Display the width and height values */}
//       <Text>
//         Width: {SIZE_MATTERS_BASE_WIDTH}, Height: {SIZE_MATTERS_BASE_HEIGHT}
//       </Text>
//     </SafeAreaProvider>
//   );
// }
