import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons'; // Import icon library

// Home Screen
const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.circle}></View>
    <Text style={styles.title}>GROW YOUR BUSINESS</Text>
    <Text style={styles.subtitle}>
      We will help you to grow your business using online server
    </Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ForgotPassword')}>
      <Text style={styles.buttonText}>LOGIN</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Verification')}>
      <Text style={styles.buttonText}>SIGN UP</Text>
    </TouchableOpacity>
    <Text style={styles.linkText}>HOW WE WORK?</Text>
  </View>
);

// Forgot Password Screen
const ForgotPasswordScreen = () => (
  <View style={styles.container}>
    <View style={styles.lockIcon}></View>
    <Text style={styles.title}>FORGET PASSWORD</Text>
    <Text style={styles.subtitle}>
      Provide your account's email for which you want to reset your password
    </Text>
    <View style={styles.inputContainer}>
      <MaterialIcons name="email" size={24} color="black" style={styles.icon} />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#000" />
    </View>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>NEXT</Text>
    </TouchableOpacity>
  </View>
);

// Verification Screen
const VerificationScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>CODE</Text>
    <Text style={styles.subtitle}>Enter the online password sent on +84902650798</Text>
    <View style={styles.codeContainer}>
      {[...Array(6)].map((_, index) => (
        <TextInput key={index} style={styles.codeInput} maxLength={1} keyboardType="numeric" />
      ))}
    </View>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>VERIFY CODE</Text>
    </TouchableOpacity>
  </View>
);

// Navigation Setup
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#add8e6',
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#000',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#ffd700',
    padding: 15,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
  linkText: {
    marginTop: 20,
    textDecorationLine: 'underline',
    color: '#000',
  },
  lockIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 25,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ccc',
    width: '80%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 5,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  codeInput: {
    borderWidth: 1,
    borderColor: '#000',
    width: 40,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
  },
});
