import React, { useState } from "react";
import { View, Text, TextInput, Image } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { OperationData } from "../../../../../redux/data/dataReducer";
import { getSelectRoom } from "../../../../../redux/data/dataSelector";
import { getUserProfile } from "../../../../../redux/user/usersSelector";
import { InputBtnClear } from "../../../../Solid/InputBtnClear/InputBtnClear";
import {
  Ant_FormMessageWrap,
  Ant_FormMessageInput,
  Ant_FormMessageBtn,
  Ant_FormMessageBtnIcon,
  Ant_FormMessageInputWrap,
} from "./FormMessages.styled";

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

  const onClearTextPress = () => {
    setInputValue(``);
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
      <Ant_FormMessageInputWrap>
        <Ant_FormMessageInput
          underlineColorAndroid="transparent"
          placeholder="Your message"
          placeholderTextColor="grey"
          numberOfLines={2}
          multiline={true}
          value={inputValue}
          onChangeText={onChangeTextMassage}
        />
        <InputBtnClear
          onClearTextPress={onClearTextPress}
          setState={setInputValue}
          validValue={validText}
        />
      </Ant_FormMessageInputWrap>

      <Ant_FormMessageBtn onPress={onSubmitPressMassage}>
        <Ant_FormMessageBtnIcon
          source={require("../../../../../assets/images/send.png")}
        />
      </Ant_FormMessageBtn>
    </Ant_FormMessageWrap>
  );
};
