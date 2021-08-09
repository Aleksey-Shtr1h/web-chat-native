import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { useSelector } from "react-redux";

import { ChannelBox } from "./../../components/AuthContent/Chat/ChannelBox";
import { SignIn } from "./../../components/Registration/SignIn/SignIn";

import { getStateUserOnline } from "../../redux/user/usersSelector";
import { DrawerSideBarStackScreen } from "./../DrawerSideBarStackScreen/DrawerSideBarStackScreen";
import { BurgerBtn } from "./../../components/BurgerBtn/BurgerBtn";

const RootStack = createStackNavigator();
export const RootStackScreen = () => {
  const isOnline = useSelector((state) => getStateUserOnline(state));

  return (
    <RootStack.Navigator headerMode="none">
      {isOnline ? (
        <RootStack.Screen
          name="Messenger"
          component={DrawerSideBarStackScreen}
        />
      ) : (
        <RootStack.Screen
          name="Registration"
          component={DrawerSideBarStackScreen}
        />
      )}
    </RootStack.Navigator>
  );
};
