import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Alert } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState('');

  const handleGetStarted = () => {
    if (name.trim() === '') {
      Alert.alert('Error', 'Please enter your name');
    } else {
      navigation.navigate('TaskList', { userName: name });
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/note.png')} style={styles.image} />
      <Text style={styles.title}>MANAGE YOUR TASK</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Button title="GET STARTED ->" onPress={handleGetStarted} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '100%',
    marginBottom: 20,
  },
});

export default HomeScreen;
