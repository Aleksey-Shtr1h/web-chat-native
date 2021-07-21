import React from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { OperationData } from "../../../../redux/data/dataReducer";

import {
  Ant_SideBarChannelItemContainer,
  Ant_SideBarChannelIconWrap,
  Ant_SideBarChannelIcon,
  Ant_SideBarChannelInfoWrap,
  Ant_SideBarChannelNameRoom,
} from "./SideBarChannelsItem.styled";
import { ActionCreatorApp } from "../../../../redux/app/appAction";

export const SideBarChannelsItem = ({ nameRoom, idRoom }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const icon = nameRoom.split("").slice(0, 1).join("")[0].toUpperCase();
  // const test = icon[0].toUpperCase();

  return (
    <Ant_SideBarChannelItemContainer
      onPress={() => {
        dispatch(ActionCreatorApp.changeSubribedUser(false));
        dispatch(OperationData.loadChannel(idRoom));
        dispatch(OperationData.loadComment(idRoom, true));
        navigation.navigate("ChannelBox", { name: nameRoom });
      }}
    >
      <Ant_SideBarChannelIconWrap>
        <Ant_SideBarChannelIcon>{icon}</Ant_SideBarChannelIcon>
      </Ant_SideBarChannelIconWrap>
      <Ant_SideBarChannelInfoWrap>
        <Ant_SideBarChannelNameRoom>{nameRoom}</Ant_SideBarChannelNameRoom>
      </Ant_SideBarChannelInfoWrap>
    </Ant_SideBarChannelItemContainer>
  );
};
