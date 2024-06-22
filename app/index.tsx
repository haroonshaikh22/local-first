import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import TasklistItem from "@/src/components/TasklistItem";
import { StatusBar } from "expo-status-bar";
import TaskList from "@/src/components/TaskList";
import TaskBoard from "@/src/components/TaskBoard";

const index = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <TaskBoard />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
});
