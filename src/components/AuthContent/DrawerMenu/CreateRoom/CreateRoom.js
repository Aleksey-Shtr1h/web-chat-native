import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { OperationData } from "../../../../redux/data/dataReducer";
import { getUserProfile } from "../../../../redux/user/usersSelector";

import { InputBtnClear } from "../../../Solid/InputBtnClear/InputBtnClear";
import { MainBtnForm } from "./../../../Solid/MainBtnForm/MainBtnForm";

import {
  Ant_SectionForm,
  Ant_FormMain,
  Ant_FormMainLabel,
  Ant_FormMainInput,
  Ant_FormMainInputWrap,
} from "../../../../globalStyled/FormMain.styled";

import { Ant_FlexRowWrap } from "../../../../globalStyled/Global.styled";

export const CreateRoom = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const userProfile = useSelector((state) => getUserProfile(state));

  const [nameRoom, setNameRoom] = useState(``);
  const [toggleButtonSubmit, setToggleButtonSubmit] = useState(false);

  const validNameRoom = nameRoom !== `` ? true : false;

  useEffect(() => {
    if (userProfile !== null) {
      setToggleButtonSubmit(true);
    }
  }, [userProfile, toggleButtonSubmit]);

  const onChangeTextNewRoom = (text) => {
    setNameRoom(text);
  };

  const onClearTextPress = () => {
    setNameRoom(``);
  };

  const onCreateRoomSubmit = () => {
    if (!validNameRoom) {
      return;
    }
    dispatch(
      OperationData.createChannel(
        nameRoom,
        [userProfile.userId],
        [userProfile.userId]
      )
    );
    navigation.navigate("ChannelBox", { name: nameRoom });
  };

  const onCancelPress = () => {
    navigation.navigate("ListRoom");
  };

  return (
    <Ant_SectionForm>
      <Ant_FormMain>
        <Ant_FormMainLabel>Enter name room</Ant_FormMainLabel>
        <Ant_FormMainInputWrap>
          <Ant_FormMainInput
            type="text"
            id="room-text"
            placeholder="name room"
            value={nameRoom}
            onChangeText={onChangeTextNewRoom}
          />
          <InputBtnClear
            onClearTextPress={onClearTextPress}
            setState={setNameRoom}
            validValue={validNameRoom}
          />
        </Ant_FormMainInputWrap>
        <Ant_FlexRowWrap>
          <MainBtnForm nameBtn={"Create"} onPressCommand={onCreateRoomSubmit} />
          <MainBtnForm nameBtn={"Cancel"} onPressCommand={onCancelPress} />
        </Ant_FlexRowWrap>
      </Ant_FormMain>
    </Ant_SectionForm>
  );
};
