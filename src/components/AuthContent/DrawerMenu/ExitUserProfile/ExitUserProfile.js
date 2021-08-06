import React from "react";
import { Button, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { OperationUser } from "../../../../redux/user/userReducer";
import { getUserAuthId } from "./../../../../redux/user/usersSelector";

export const ExitUserProfile = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const userAuthId = useSelector((state) => getUserAuthId(state));

  const onClick = async () => {
    await new Promise(() => {
      dispatch(OperationUser.userExit(userAuthId));
    });
    navigation.navigate("SignIn");
  };

  return (
    <View>
      <Button title="Click" onPress={onClick} />
    </View>
  );
};
