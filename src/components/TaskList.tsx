import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import TasklistItem from "./TasklistItem";
import { useQuery, useRealm } from "@realm/react";
import { task_model } from "../models/task_model";
import { BSON } from "realm";

const TaskList = () => {
  //hook realm method
  const realm = useRealm();

  //listen data from local db
  const tasks = useQuery(task_model);
  // const [tasks, setTasks] = useState([
  //   { id: "1", description: "first task" },
  //   { id: "2", description: "first task" },
  //   { id: "3", description: "third task" },
  // ]);

  console.log(tasks, "l");

  const [newTask, setNewTask] = useState("");

  const onCreateTask = () => {
    // setTasks([...tasks, { description: newTask }]);

    //create data in localdb
    realm.write(() => {
      realm.create(task_model, {
        _id: new BSON.ObjectId(),
        description: newTask,
        user_id: "12sjs",
      });
    });

    setNewTask("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>

      <FlatList
        contentContainerStyle={{
          gap: 5,
        }}
        data={tasks}
        renderItem={({ item }) => <TasklistItem task={item} />}
      />

      {/* task input  */}
      <TextInput
        value={newTask}
        onChangeText={setNewTask}
        placeholder="Enter Task"
        placeholderTextColor={"gray"}
        style={styles.taskInput}
      />

      <Button title="Add Task" onPress={onCreateTask} />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101112",
    padding: 10,
    borderRadius: 5,
    gap: 5,
  },
  header: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  taskInput: {
    color: "#FFF",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#1D2125",
  },
});
