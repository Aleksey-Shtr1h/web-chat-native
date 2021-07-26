import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AuthConent } from "./../../components/AuthContent/AuthConent";
import { CreateRoom } from "../../components/AuthContent/DrawerMenu/CreateRoom/CreateRoom";
import { ExitUserProfile } from "./../../components/AuthContent/DrawerMenu/ExitUserProfile/ExitUserProfile";
import { useSelector } from "react-redux";
import { getStateUserOnline } from "../../redux/user/usersSelector";
import { SignIn } from "./../../components/Registration/SignIn/SignIn";
import { SignUp } from "./../../components/Registration/SignUp/SignUp";
import { BottonTabSettingsUserStack } from "./../BottonTabSettingsUserStack/BottonTabSettingsUserStack";
import { SettingsUser } from "./../../components/AuthContent/DrawerMenu/SettingsUser/SettingsUser";

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
            component={AuthConent}
            options={{ title: "Список чатов" }}
          />
          <DrawerSideBarStack.Screen
            name="CreateRoom"
            component={CreateRoom}
            options={{ title: "Создать чат" }}
          />
          <DrawerSideBarStack.Screen
            name="Settings"
            component={SettingsUser}
            options={{ title: "Настройки" }}
          />
          <DrawerSideBarStack.Screen
            name="ExitProfile"
            component={ExitUserProfile}
            options={{ title: "Выйти" }}
          />
        </>
      ) : (
        <>
          <DrawerSideBarStack.Screen name="Войти" component={SignIn} />
          <DrawerSideBarStack.Screen
            name="Создать пользователя"
            component={SignUp}
          />
        </>
      )}
    </DrawerSideBarStack.Navigator>
  );
};
