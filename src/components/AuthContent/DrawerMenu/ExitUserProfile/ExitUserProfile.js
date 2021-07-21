import React from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { OperationUser } from "../../../../redux/user/userReducer";
import { getUserAuthId } from "./../../../../redux/user/usersSelector";

export const ExitUserProfile = () => {
  const dispatch = useDispatch();
  const userAuthId = useSelector((state) => getUserAuthId(state));
  dispatch(OperationUser.userExit(userAuthId));
  return <View></View>;
};
