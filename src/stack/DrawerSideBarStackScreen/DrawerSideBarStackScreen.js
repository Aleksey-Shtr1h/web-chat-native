import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AuthConent } from "./../../components/AuthContent/AuthConent";
import { CreateRoom } from "../../components/AuthContent/DrawerMenu/CreateRoom/CreateRoom";
import { ExitUserProfile } from "./../../components/AuthContent/DrawerMenu/ExitUserProfile/ExitUserProfile";
import { useSelector } from "react-redux";
import { getStateUserOnline } from "../../redux/user/usersSelector";
import { SignIn } from "./../../components/Registration/SignIn/SignIn";
import { SignUp } from "./../../components/Registration/SignUp/SignUp";

const DrawerSideBarStack = createDrawerNavigator();

export const DrawerSideBarStackScreen = ({ navigation }) => {
  const isOnline = useSelector((state) => getStateUserOnline(state));
  const navName = isOnline ? "Главная" : "Войти";
  return (
    <DrawerSideBarStack.Navigator initialRouteName={navName}>
      {isOnline ? (
        <>
          <DrawerSideBarStack.Screen name="Главная" component={AuthConent} />
          <DrawerSideBarStack.Screen
            name="Создать чат"
            component={CreateRoom}
          />
          <DrawerSideBarStack.Screen name="Выйти" component={ExitUserProfile} />
        </>
      ) : (
        <>
          <DrawerSideBarStack.Screen
            name="Войти"
            component={SignIn}
            // options={}
          />
          <DrawerSideBarStack.Screen
            name="Создать пользователя"
            component={SignUp}
          />
        </>
      )}
    </DrawerSideBarStack.Navigator>
  );
};
