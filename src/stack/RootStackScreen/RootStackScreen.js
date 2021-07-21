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

  const navName = isOnline ? "AuthConent" : "SignIn";

  return (
    <RootStack.Navigator initialRouteName={navName}>
      {isOnline ? (
        <>
          <RootStack.Screen
            name="Messenger"
            component={DrawerSideBarStackScreen}
            options={{
              headerLeft: () => <BurgerBtn />,
            }}
          />
          <RootStack.Screen
            name="ChannelBox"
            component={ChannelBox}
            options={({ route }) => ({ title: route.params.name })}
          />
        </>
      ) : (
        <RootStack.Screen
          name="Регистрация"
          component={DrawerSideBarStackScreen}
          options={{
            title: "Регистрация",
            headerLeft: () => <BurgerBtn />,
            headerTitleStyle: {
              color: "#3577ef",
            },
          }}
        />
      )}
    </RootStack.Navigator>
  );
};
