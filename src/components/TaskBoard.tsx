import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import TaskList from "./TaskList";

const TaskBoard = () => {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <LinearGradient
        colors={["#8711c1", "#2472fc"]}
        style={StyleSheet.absoluteFill}
      />
      <SafeAreaView>
        <TaskList />
      </SafeAreaView>
    </View>
  );
};

export default TaskBoard;

const styles = StyleSheet.create({});
