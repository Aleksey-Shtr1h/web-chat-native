import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { OperationData } from "../../../../../redux/data/dataReducer";
import { getSelectRoom } from "../../../../../redux/data/dataSelector";
import { getUserProfile } from "../../../../../redux/user/usersSelector";
import { onInputFocusStyle, onPressEvents } from "../../../../../utils/utils";
import { InputBtnClear } from "../../../../Solid/InputBtnClear/InputBtnClear";
import {
  Ant_FormMessageWrap,
  Ant_FormMessageInput,
  Ant_FormMessageBtn,
  Ant_FormMessageBtnIcon,
  Ant_FormMessageInputWrap,
} from "./FormMessages.styled";

export const FormMessages = () => {
  const [inputStyle, setInputStyle] = useState(
    onInputFocusStyle.onBlur(2, "#f4f5f4")
  );
  const dispatch = useDispatch();
  const selectRoom = useSelector((state) => getSelectRoom(state));
  const userProfile = useSelector((state) => getUserProfile(state));
  const [inputMassageValue, setInputMassageValue] = useState("");

  const {
    info: { name },
    userId,
  } = userProfile;

  const { onChangeText, onValidStateValue, onClearTextPress } = onPressEvents;
  const { onFocus, onBlur } = onInputFocusStyle;

  const onSubmitPressMassage = () => {
    if (!onValidStateValue(inputMassageValue)) {
      return;
    }

    dispatch(
      OperationData.createComment(
        selectRoom.idRoom,
        inputMassageValue,
        name,
        userId
      )
    );
    setInputMassageValue("");
  };

  return (
    <Ant_FormMessageWrap>
      <Ant_FormMessageInputWrap style={inputStyle}>
        <Ant_FormMessageInput
          underlineColorAndroid="transparent"
          placeholder="Your message"
          placeholderTextColor="grey"
          numberOfLines={2}
          multiline={true}
          value={inputMassageValue}
          onChangeText={(text) => onChangeText(text, setInputMassageValue)}
          onFocus={() => setInputStyle(onFocus(2, "black"))}
          onBlur={() => setInputStyle(onBlur(2, "#f4f5f4"))}
        />
        <InputBtnClear
          onClearTextPress={onClearTextPress}
          setState={setInputMassageValue}
          onValidStateValue={onValidStateValue(inputMassageValue)}
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
