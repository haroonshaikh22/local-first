import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useObject } from "@realm/react";
import { BSON } from "realm";
import { task_model } from "../models/task_model";

const Details = () => {
  const { id } = useLocalSearchParams();
  const task = useObject<task_model>(
    task_model,
    new BSON.ObjectID(id as string)
  );

  console.log(task, "lllll");

  if (!task) {
    return <Text>not found</Text>;
  }
  return (
    <View>
      <Text style={{ color: "#fff" }}>{task.description}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
