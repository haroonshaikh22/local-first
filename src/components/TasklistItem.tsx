import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const TasklistItem = ({ task }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{task.description}</Text>
      <AntDesign name="close" size={16} color={"grey"} />
    </View>
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
