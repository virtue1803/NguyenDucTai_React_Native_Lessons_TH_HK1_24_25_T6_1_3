import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

const AddTaskScreen = ({ navigation, route }) => {
  const { userName, task } = route.params;
  const [taskName, setTaskName] = useState('');

  useEffect(() => {
    if (task) {
      setTaskName(task.name);
    }
  }, [task]);

  const handleFinish = async () => {
    if (task) {
      // Update existing task
      try {
        await axios.put(`https://66ff35522b9aac9c997e84d8.mockapi.io/Job/${task.id}`, { name: taskName });
        navigation.goBack();
      } catch (error) {
        console.error('Error updating task:', error);
        Alert.alert('Error', 'Could not update the task. Please try again.');
      }
    } else {
      // Create new task
      try {
        await axios.post('https://66ff35522b9aac9c997e84d8.mockapi.io/Job', { name: taskName });
        navigation.goBack();
      } catch (error) {
        console.error('Error adding task:', error);
        Alert.alert('Error', 'Could not add the task. Please try again.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerText}>Add Your Job</Text>
      </View>
      
      <TextInput
        style={styles.input}
        placeholder="Input your job"
        value={taskName}
        onChangeText={setTaskName}
      />

      <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
        <Text style={styles.finishButtonText}>{task ? 'Update' : 'FINISH'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    marginLeft: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 20,
  },
  finishButton: {
    backgroundColor: '#add8e6',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  finishButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AddTaskScreen;
