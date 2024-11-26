/**
 * My To Do List App
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';


function App() {

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

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
});

export default App;
