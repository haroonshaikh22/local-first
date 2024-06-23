import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { task_model } from "../models/task_model";
import { useRealm } from "@realm/react";

const TasklistItem = ({ task }: { task: task_model }) => {
  const realm = useRealm();
  const deleteTask = () => {
    realm.write(() => {
      realm.delete(task);
    });

    console.warn("Delete");
  };
  return (
    <Link href={`/${task._id}`} asChild>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.textStyle}>{task.description}</Text>
        <AntDesign name="close" size={16} color={"grey"} onPress={deleteTask} />
      </TouchableOpacity>
    </Link>
  );
};

export default TasklistItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1D2125",
    padding: 15,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textStyle: {
    color: "#fff",
    fontSize: 16,
  },
});
