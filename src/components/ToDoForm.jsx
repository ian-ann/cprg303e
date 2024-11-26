import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');
  const [error, setError] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() === '') {
      setError('Task cannot be empty');
    } else {
      addTask(taskText);
      setTaskText('');
      setError('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={(text) => setTaskText(text)}
          value={taskText}
        />
        <Button title="Add Task" onPress={handleAddTask} />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};


const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  error: {
    paddingVertical: 5,
    color: 'red',
    marginHorizontal: 20,
  },
});


export default ToDoForm;