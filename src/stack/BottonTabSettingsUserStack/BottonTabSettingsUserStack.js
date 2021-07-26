import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Stack1 } from "./../../components/AuthContent/TabMenu/Stack1/Stack1";
import { Stack2 } from "./../../components/AuthContent/TabMenu/Stack2/Stack2";

const Tab = createBottomTabNavigator();

export const BottonTabSettingsUserStack = () => {
  return (
    <Tab.Navigator initialRouteName={Stack1}>
      <Tab.Screen name="Stack-1" component={Stack1} />
      <Tab.Screen name="Stack-2" component={Stack2} />
    </Tab.Navigator>
  );
};
