import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { RootStackScreen } from "./../../stack/RootStackScreen/RootStackScreen";

export const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};
