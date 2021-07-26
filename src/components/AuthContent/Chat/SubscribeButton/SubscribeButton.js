import React from "react";
import { useDispatch } from "react-redux";
import { View, Image } from "react-native";
import { OperationData } from "../../../../redux/data/dataReducer";

import { Ant_SubscribeButtonWrap } from "./SubscribeButton.styled";
import { Ant_BtnMainForm } from "./../../../../globalStyled/FormMain.styled";

export const SubscribeButton = ({ selectRoom, userProfile }) => {
  const dispatch = useDispatch();

  const onAddChannelPress = () => {
    dispatch(
      OperationData.addUserToChannel(
        userProfile?.userId,
        selectRoom?.idRoom,
        selectRoom?.usersRoom,
        selectRoom?.info?.nameRoom
      )
    );
  };

  return (
    <Ant_SubscribeButtonWrap>
      <Ant_BtnMainForm title="Subribe Channel" onPress={onAddChannelPress} />
    </Ant_SubscribeButtonWrap>
  );
};
