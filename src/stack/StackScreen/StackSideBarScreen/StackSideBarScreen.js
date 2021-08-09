import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthConent } from "./../../../components/AuthContent/AuthConent";
import { CreateRoom } from "./../../../components/AuthContent/DrawerMenu/CreateRoom/CreateRoom";
import { SettingsUser } from "./../../../components/AuthContent/DrawerMenu/SettingsUser/SettingsUser";
import { ExitUserProfile } from "./../../../components/AuthContent/DrawerMenu/ExitUserProfile/ExitUserProfile";
import { BurgerBtn } from "./../../../components/BurgerBtn/BurgerBtn";
import { SignIn } from "../../../components/Registration/SignIn/SignIn";
import { SignUp } from "../../../components/Registration/SignUp/SignUp";
import { ChannelBox } from "./../../../components/AuthContent/Chat/ChannelBox";
import { ChangeUserProfileInfo } from "./../../../components/AuthContent/UserInfo/ChangeUserProfileInfo/ChangeUserProfileInfo";

const ListRoomScreen = createStackNavigator();
export const StackListRoomScreen = () => {
  return (
    <ListRoomScreen.Navigator>
      <ListRoomScreen.Screen
        name="Main"
        component={AuthConent}
        options={{
          headerLeft: () => <BurgerBtn />,
          headerTitleStyle: {
            color: "#3577ef",
          },
          title: "Главная",
        }}
      />
      <ListRoomScreen.Screen
        name="ChannelBox"
        component={ChannelBox}
        options={({ route }) => ({ title: route.params.name })}
      />
    </ListRoomScreen.Navigator>
  );
};

const CreateRoomScreen = createStackNavigator();
export const StackCreateRoomScreen = () => {
  return (
    <CreateRoomScreen.Navigator>
      <CreateRoomScreen.Screen
        name="CreateRoom"
        component={CreateRoom}
        options={{
          headerLeft: () => <BurgerBtn />,
          headerTitleStyle: {
            color: "#3577ef",
          },
          title: "Создать чат",
        }}
      />
    </CreateRoomScreen.Navigator>
  );
};

const SettingsScreen = createStackNavigator();
export const StackSettingsScreen = () => {
  return (
    <SettingsScreen.Navigator>
      <SettingsScreen.Screen
        name="SettingsUser"
        component={SettingsUser}
        options={{
          headerLeft: () => <BurgerBtn />,
          headerTitleStyle: {
            color: "#3577ef",
          },
          title: "Настройки",
        }}
      />
      <SettingsScreen.Screen
        name="ChangeUserProfileInfo"
        component={ChangeUserProfileInfo}
        options={{
          //   headerLeft: () => <BurgerBtn />,
          headerTitleStyle: {
            color: "#3577ef",
          },
          title: "Изменить информацию",
        }}
      />
    </SettingsScreen.Navigator>
  );
};

const ExitProfileScreen = createStackNavigator();
export const StackExitProfileScreen = () => {
  return (
    <ExitProfileScreen.Navigator>
      <ExitProfileScreen.Screen
        name="ExitUserProfile"
        component={ExitUserProfile}
        options={{
          headerLeft: () => <BurgerBtn />,
          headerTitleStyle: {
            color: "#3577ef",
          },
          title: "Выйти",
        }}
      />
    </ExitProfileScreen.Navigator>
  );
};

const SignInProfileScreen = createStackNavigator();
export const StackSignInProfileScreen = () => {
  return (
    <SignInProfileScreen.Navigator>
      <SignInProfileScreen.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerLeft: () => <BurgerBtn />,
          headerTitleStyle: {
            color: "#3577ef",
          },
          title: "Выйти",
        }}
      />
    </SignInProfileScreen.Navigator>
  );
};

const SignUpProfileScreen = createStackNavigator();
export const StackSignUpProfileScreen = () => {
  return (
    <SignUpProfileScreen.Navigator>
      <SignUpProfileScreen.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerLeft: () => <BurgerBtn />,
          headerTitleStyle: {
            color: "#3577ef",
          },
          title: "Создать пользователя",
        }}
      />
    </SignUpProfileScreen.Navigator>
  );
};
