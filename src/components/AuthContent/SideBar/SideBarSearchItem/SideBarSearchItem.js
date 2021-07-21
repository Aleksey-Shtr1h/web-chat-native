import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { OperationData } from "../../../../redux/data/dataReducer";
import { ActionCreatorApp } from "../../../../redux/app/appAction";
import {
  Ant_SideBarSearchItemWrap,
  Ant_SideBarSearchItemText,
} from "./SideBarSearchItem.styled";

export const SideBarSearchItem = ({ searchItem, setValueSearch }) => {
  const {
    info: { nameRoom },
    idRoom,
  } = searchItem;

  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <Ant_SideBarSearchItemWrap
      onPress={() => {
        dispatch(ActionCreatorApp.changeSubribedUser(false));
        dispatch(ActionCreatorApp.changeChannelId(idRoom));
        setValueSearch(nameRoom);
        dispatch(OperationData.loadChannel(idRoom));
        navigation.navigate("ChannelBox", { name: nameRoom });
      }}
    >
      <Ant_SideBarSearchItemText>{nameRoom}</Ant_SideBarSearchItemText>
    </Ant_SideBarSearchItemWrap>
  );
};
