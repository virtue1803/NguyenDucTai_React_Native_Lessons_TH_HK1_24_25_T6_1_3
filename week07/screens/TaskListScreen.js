import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

const TaskListScreen = ({ navigation, route }) => {
  const { userName } = route.params;
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://66ff35522b9aac9c997e84d8.mockapi.io/Job');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      Alert.alert('Error', 'Could not fetch tasks. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter(task => 
    task.name && task.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description && task.description.toLowerCase().includes(searchQuery.toLowerCase()) // Giả sử bạn có thuộc tính mô tả
  );

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://66ff35522b9aac9c997e84d8.mockapi.io/Job/${id}`);
      Alert.alert("Success", "Task deleted successfully.");
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
      Alert.alert('Error', 'Could not delete the task. Please try again.');
    }
  };

  const handleUpdate = (task) => {
    navigation.navigate('AddTask', { userName, task, onGoBack: fetchTasks });
  };

  const handleAddTask = async (newTask) => {
    try {
      await axios.post('https://66ff35522b9aac9c997e84d8.mockapi.io/Job', newTask);
      Alert.alert("Success", "Task added successfully.");
      fetchTasks();
    } catch (error) {
      console.error('Error adding task:', error);
      Alert.alert('Error', 'Could not add the task. Please try again.');
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
        <Text style={styles.headerText}>Hi {userName}, Have a great day ahead!</Text>
        <TouchableOpacity onPress={fetchTasks}>
          <Ionicons name="reload" size={24} />
        </TouchableOpacity>
      </View>
      
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <Ionicons name="checkmark-circle" size={24} color="green" />
              <Text style={styles.taskName}>{item.name}</Text>
              <View style={styles.iconsContainer}>
                <Ionicons name="create" size={24} color="gray" onPress={() => handleUpdate(item)} />
                <Ionicons
                  name="trash"
                  size={24}
                  color="red"
                  onPress={() => 
                    Alert.alert(
                      "Delete Task",
                      "Are you sure you want to delete this task?",
                      [
                        { text: "Cancel", style: "cancel" },
                        { text: "OK", onPress: () => handleDelete(item.id) }
                      ]
                    )
                  }
                />
              </View>
            </View>
          )}
          ListEmptyComponent={<Text style={styles.emptyMessage}>No tasks found</Text>}
          contentContainerStyle={filteredTasks.length === 0 && styles.emptyContainer} 
        />
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddTask', { userName, onAddTask: handleAddTask })}
      >
        <Ionicons name="add" size={40} color="#fff" />
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
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    marginLeft: 10,
    flex: 1,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 20,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  taskName: {
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#add8e6',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emptyMessage: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default TaskListScreen;
