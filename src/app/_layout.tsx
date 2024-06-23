import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import RealmCustomProvider from "../providers/RealmCustomProvider";

const RootLayout = () => {
  return (
    <>
      <ThemeProvider value={DarkTheme}>
        <RealmCustomProvider>
          <Stack></Stack>
        </RealmCustomProvider>
        <StatusBar style="light" />
      </ThemeProvider>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
