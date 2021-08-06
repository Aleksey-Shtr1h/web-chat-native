import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useSelector } from "react-redux";
import { getStateUserOnline } from "../../redux/user/usersSelector";
import {
  StackCreateRoomScreen,
  StackExitProfileScreen,
  StackListRoomScreen,
  StackSettingsScreen,
  StackSignInProfileScreen,
  StackSignUpProfileScreen,
} from "./../StackScreen/StackSideBarScreen/StackSideBarScreen";

const DrawerSideBarStack = createDrawerNavigator();

export const DrawerSideBarStackScreen = ({ navigation }) => {
  const isOnline = useSelector((state) => getStateUserOnline(state));
  const navName = isOnline ? "Список чатов" : "Войти";
  return (
    <DrawerSideBarStack.Navigator initialRouteName={navName}>
      {isOnline ? (
        <>
          <DrawerSideBarStack.Screen
            name="ListRoom"
            component={StackListRoomScreen}
            options={{ title: "Список чатов" }}
          />

          <DrawerSideBarStack.Screen
            name="CreateRoom"
            component={StackCreateRoomScreen}
            options={{ title: "Создать чат" }}
          />
          <DrawerSideBarStack.Screen
            name="Settings"
            component={StackSettingsScreen}
            options={{ title: "Настройки" }}
          />
          <DrawerSideBarStack.Screen
            name="ExitProfile"
            component={StackExitProfileScreen}
            options={{ title: "Выйти" }}
          />
        </>
      ) : (
        <>
          <DrawerSideBarStack.Screen
            name="SignIn"
            component={StackSignInProfileScreen}
            options={{ title: "Войти" }}
          />
          <DrawerSideBarStack.Screen
            name="SignUp"
            component={StackSignUpProfileScreen}
            options={{ title: "Создать пользователя" }}
          />
        </>
      )}
    </DrawerSideBarStack.Navigator>
  );
};
