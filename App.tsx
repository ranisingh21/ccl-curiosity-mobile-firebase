import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation/navigations";

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

// import React, {useState, useEffect} from 'react';
// import {StyleSheet, View, Text, TextInput, Button, ActivityIndicator, Alert} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

// function App(): React.JSX.Element {
//  // If null, no SMS has been sent
//  const [confirm, setConfirm] =
//    useState<FirebaseAuthTypes.ConfirmationResult | null>(null);

//  // The phone number to sign in with
//  const [phoneNumber, setPhoneNumber] = useState('');

//  // Verification code (OTP - One-Time-Passcode)
//  const [code, setCode] = useState('');

//  // Loading state for async operations
//  const [loading, setLoading] = useState(false);

//  // User state to track if logged in
//  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
//  // Firebase ID token once authenticated
//  const [idToken, setIdToken] = useState<string | null>(null);

//  // Handle login state changes
//  function onAuthStateChanged(userState: FirebaseAuthTypes.User | null) {
//    setUser(userState);
//    if (userState) {
//      // Clear confirmation state if we are logged in
//      setConfirm(null);
//      // Fetch and log Firebase ID token
//      userState
//        .getIdToken(true)
//        .then(token => {
//          setIdToken(token);
//          console.log('Firebase ID token:', token);
//        })
//        .catch(err => {
//          console.log('Failed to get ID token:', err);
//        });
//    } else {
//      setIdToken(null);
//    }
//  }

//  useEffect(() => {
//    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//    return subscriber; // unsubscribe on unmount
//  }, []);

//  // Step 1: Handle the button press to send SMS
//  async function signInWithPhoneNumber() {
//    if (!phoneNumber) {
//      Alert.alert('Error', 'Please enter a phone number');
//      return;
//    }

//    setLoading(true);
//    try {
//      // Use the default export auth() for simpler syntax standard in RNFirebase
//      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//      setConfirm(confirmation);
//      Alert.alert('SMS Sent', 'Please check your phone for the code.');
//    } catch (error: any) {
//      console.log('Error sending SMS:', error);
//      Alert.alert('Error', error.message || 'Could not send SMS');
//    } finally {
//      setLoading(false);
//    }
//  }

//  // Step 2: Handle verifying the code
//  async function confirmCode() {
//    if (!code || !confirm) return;

//    setLoading(true);
//    try {
//      await confirm.confirm(code);
//      // onAuthStateChanged will handle the successful login and setting user state
//    } catch (error) {
//      console.log('Invalid code.', error);
//      Alert.alert('Invalid Code', 'The code you entered is incorrect.');
//    } finally {
//      setLoading(false);
//    }
//  }

//  // Step 3: Handle Sign out
//  async function signOut() {
//    await auth().signOut();
//    setConfirm(null);
//    setCode('');
//    setPhoneNumber('');
//    setIdToken(null);
//  }

//  if (loading) {
//    return (
//      <View style={styles.container}>
//        <ActivityIndicator size="large" color="#0000ff" />
//      </View>
//    );
//  }

//  // View: Logged In
//  if (user) {
//    return (
//      <SafeAreaView style={styles.container}>
//        <Text style={styles.title}>Welcome!</Text>
//        <Text style={styles.text}>User ID: {user.uid}</Text>
//        <Text style={styles.text}>Phone: {user.phoneNumber}</Text>
//        {idToken ? (
//          <>
//            <Text style={styles.subTitle}>Firebase ID Token</Text>
//            <Text style={styles.tokenText}>{idToken}</Text>
//          </>
//        ) : null}
//        <Button title="Sign Out" onPress={signOut} />
//      </SafeAreaView>
//    );
//  }

//  // View: Enter OTP Code
//  if (confirm) {
//    return (
//      <SafeAreaView style={styles.container}>
//        <Text style={styles.title}>Enter Verification Code</Text>
//        <TextInput
//          style={styles.input}
//          value={code}
//          onChangeText={text => setCode(text)}
//          placeholder="123456"
//          keyboardType="number-pad"
//        />
//        <Button title="Confirm Code" onPress={confirmCode} />
//        <Button
//          title="Cancel"
//          color="red"
//          onPress={() => {
//            setConfirm(null);
//            setCode('');
//          }}
//        />
//      </SafeAreaView>
//    );
//  }

//  // View: Enter Phone Number
//  return (
//    <SafeAreaView style={styles.container}>
//      <Text style={styles.title}>Phone Sign In</Text>
//      <Text style={styles.label}>
//        Enter phone number with country code (e.g., +1 650-555-3434)
//      </Text>
//      <TextInput
//        style={styles.input}
//        value={phoneNumber}
//        onChangeText={text => setPhoneNumber(text)}
//        placeholder="+1 650 555 3434"
//        keyboardType="phone-pad"
//      />
//      <Button title="Send Code" onPress={signInWithPhoneNumber} />
//    </SafeAreaView>
//  );
// }

// const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    padding: 20,
//    backgroundColor: '#f5f5f5',
//  },
//  title: {
//    fontSize: 24,
//    fontWeight: 'bold',
//    marginBottom: 20,
//    textAlign: 'center',
//  },
//  label: {
//    fontSize: 16,
//    marginBottom: 10,
//    color: '#333',
//  },
//  input: {
//    height: 50,
//    borderColor: '#ddd',
//    borderWidth: 1,
//    borderRadius: 8,
//    paddingHorizontal: 15,
//    fontSize: 18,
//    marginBottom: 20,
//    backgroundColor: 'white',
//  },
//  text: {
//    fontSize: 18,
//    marginBottom: 15,
//    textAlign: 'center',
//  },
//  subTitle: {
//    fontSize: 16,
//    fontWeight: '600',
//    marginBottom: 8,
//    textAlign: 'center',
//  },
//  tokenText: {
//    fontSize: 12,
//    marginBottom: 20,
//    color: '#222',
//    textAlign: 'left',
//  },
// });

// export default App;




// // import React, {useState, useEffect} from 'react';
// // import {StyleSheet, View, Text, TextInput, Button, ActivityIndicator, Alert} from 'react-native';
// // import {SafeAreaView} from 'react-native-safe-area-context';
// // import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';


// // function App(): React.JSX.Element {
// //  // If null, no SMS has been sent
// //  const [confirm, setConfirm] =
// //    useState<FirebaseAuthTypes.ConfirmationResult | null>(null);


// //  // The phone number to sign in with
// //  const [phoneNumber, setPhoneNumber] = useState('');


// //  // Verification code (OTP - One-Time-Passcode)
// //  const [code, setCode] = useState('');


// //  // Loading state for async operations
// //  const [loading, setLoading] = useState(false);


// //  // User state to track if logged in
// //  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
// //  // Firebase ID token once authenticated
// //  const [idToken, setIdToken] = useState<string | null>(null);


// //  // Handle login state changes
// //  function onAuthStateChanged(userState: FirebaseAuthTypes.User | null) {
// //    setUser(userState);
// //    if (userState) {
// //      // Clear confirmation state if we are logged in
// //      setConfirm(null);
// //      // Fetch and log Firebase ID token
// //      userState
// //        .getIdToken(true)
// //        .then(token => {
// //          setIdToken(token);
// //          console.log('Firebase ID token:', token);
// //        })
// //        .catch(err => {
// //          console.log('Failed to get ID token:', err);
// //        });
// //    } else {
// //      setIdToken(null);
// //    }
// //  }


// //  useEffect(() => {
// //    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
// //    return subscriber; // unsubscribe on unmount
// //  }, []);


// //  // Step 1: Handle the button press to send SMS
// //  async function signInWithPhoneNumber() {
// //    if (!phoneNumber) {
// //      Alert.alert('Error', 'Please enter a phone number');
// //      return;
// //    }


// //    setLoading(true);
// //    try {
// //      // Use the default export auth() for simpler syntax standard in RNFirebase
// //      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
// //      setConfirm(confirmation);
// //      Alert.alert('SMS Sent', 'Please check your phone for the code.');
// //    } catch (error: any) {
// //      console.log('Error sending SMS:', error);
// //      Alert.alert('Error', error.message || 'Could not send SMS');
// //    } finally {
// //      setLoading(false);
// //    }
// //  }


//  // Step 2: Handle verifying the code
//  async function confirmCode() {
//    if (!code || !confirm) return;


//    setLoading(true);
//    try {
//      await confirm.confirm(code);
//      // onAuthStateChanged will handle the successful login and setting user state
//    } catch (error) {
//      console.log('Invalid code.', error);
//      Alert.alert('Invalid Code', 'The code you entered is incorrect.');
//    } finally {
//      setLoading(false);
//    }
//  }


//  // Step 3: Handle Sign out
//  async function signOut() {
//    await auth().signOut();
//    setConfirm(null);
//    setCode('');
//    setPhoneNumber('');
//    setIdToken(null);
//  }


//  if (loading) {
//    return (
//      <View style={styles.container}>
//        <ActivityIndicator size="large" color="#0000ff" />
//      </View>
//    );
//  }


//  // View: Logged In
//  if (user) {
//    return (
//      <SafeAreaView style={styles.container}>
//        <Text style={styles.title}>Welcome!</Text>
//        <Text style={styles.text}>User ID: {user.uid}</Text>
//        <Text style={styles.text}>Phone: {user.phoneNumber}</Text>
//        {idToken ? (
//          <>
//            <Text style={styles.subTitle}>Firebase ID Token</Text>
//            <Text style={styles.tokenText}>{idToken}</Text>
//          </>
//        ) : null}
//        <Button title="Sign Out" onPress={signOut} />
//      </SafeAreaView>
//    );
//  }


//  // View: Enter OTP Code
//  if (confirm) {
//    return (
//      <SafeAreaView style={styles.container}>
//        <Text style={styles.title}>Enter Verification Code</Text>
//        <TextInput
//          style={styles.input}
//          value={code}
//          onChangeText={text => setCode(text)}
//          placeholder="123456"
//          keyboardType="number-pad"
//        />
//        <Button title="Confirm Code" onPress={confirmCode} />
//        <Button
//          title="Cancel"
//          color="red"
//          onPress={() => {
//            setConfirm(null);
//            setCode('');
//          }}
//        />
//      </SafeAreaView>
//    );
//  }


//  // View: Enter Phone Number
//  return (
//    <SafeAreaView style={styles.container}>
//      <Text style={styles.title}>Phone Sign In</Text>
//      <Text style={styles.label}>
//        Enter phone number with country code (e.g., +1 650-555-3434)
//      </Text>
//      <TextInput
//        style={styles.input}
//        value={phoneNumber}
//        onChangeText={text => setPhoneNumber(text)}
//        placeholder="+1 650 555 3434"
//        keyboardType="phone-pad"
//      />
//      <Button title="Send Code" onPress={signInWithPhoneNumber} />
//    </SafeAreaView>
//  );
// }


// const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    padding: 20,
//    backgroundColor: '#f5f5f5',
//  },
//  title: {
//    fontSize: 24,
//    fontWeight: 'bold',
//    marginBottom: 20,
//    textAlign: 'center',
//  },
//  label: {
//    fontSize: 16,
//    marginBottom: 10,
//    color: '#333',
//  },
//  input: {
//    height: 50,
//    borderColor: '#ddd',
//    borderWidth: 1,
//    borderRadius: 8,
//    paddingHorizontal: 15,
//    fontSize: 18,
//    marginBottom: 20,
//    backgroundColor: 'white',
//  },
//  text: {
//    fontSize: 18,
//    marginBottom: 15,
//    textAlign: 'center',
//  },
//  subTitle: {
//    fontSize: 16,
//    fontWeight: '600',
//    marginBottom: 8,
//    textAlign: 'center',
//  },
//  tokenText: {
//    fontSize: 12,
//    marginBottom: 20,
//    color: '#222',
//    textAlign: 'left',
//  },
// });


// export default App;

