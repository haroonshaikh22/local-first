import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import TaskBoard from "../components/TaskBoard";
import { Stack } from "expo-router";
import "react-native-get-random-values";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Project Board",
        }}
      />
      <TaskBoard />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
});
