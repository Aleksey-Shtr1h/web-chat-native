import React, { useState } from "react";
import { View, Text, TextInput, Image } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { OperationData } from "../../../../../redux/data/dataReducer";
import { getSelectRoom } from "../../../../../redux/data/dataSelector";
import { getUserProfile } from "../../../../../redux/user/usersSelector";
import {
  Ant_FormMessageWrap,
  Ant_FormMessageInput,
  Ant_FormMessageBtn,
  Ant_FormMessageBtnIcon,
} from "./FormMessages.styled";

import { ReactComponent as IconSend } from "../../../../../assets/images/send-btn.svg";

export const FormMessages = () => {
  const dispatch = useDispatch();
  const selectRoom = useSelector((state) => getSelectRoom(state));
  const userProfile = useSelector((state) => getUserProfile(state));
  const [inputValue, setInputValue] = useState("");

  const {
    info: { name },
    userId,
  } = userProfile;

  const validText = inputValue !== `` ? true : false;

  const onChangeTextMassage = (text) => {
    setInputValue(text);
  };

  const onSubmitPressMassage = () => {
    if (!validText) {
      return;
    }

    dispatch(
      OperationData.createComment(selectRoom.idRoom, inputValue, name, userId)
    );
    setInputValue("");
  };

  return (
    <Ant_FormMessageWrap>
      <Text
        className="form-messages__text"
        htmlFor="messages-text"
        area-label="messages-text"
      ></Text>
      <Ant_FormMessageInput
        underlineColorAndroid="transparent"
        placeholder="Your message"
        placeholderTextColor="grey"
        numberOfLines={2}
        multiline={true}
        value={inputValue}
        onChangeText={onChangeTextMassage}
      />
      <Ant_FormMessageBtn onPress={onSubmitPressMassage}>
        <Ant_FormMessageBtnIcon
          source={require("../../../../../assets/images/send.png")}
        />
      </Ant_FormMessageBtn>
    </Ant_FormMessageWrap>
  );
};
