import { View, Text } from "react-native";
import React, { PropsWithChildren } from "react";
import Realm from "realm";
import { RealmProvider } from "@realm/react";
import { task_model } from "../models/task_model";

const RealmCustomProvider = ({ children }: PropsWithChildren) => {
  return <RealmProvider schema={[task_model]}>{children}</RealmProvider>;
};

export default RealmCustomProvider;
