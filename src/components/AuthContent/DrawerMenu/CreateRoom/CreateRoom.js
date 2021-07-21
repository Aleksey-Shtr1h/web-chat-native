import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreatorApp } from "../../../../redux/app/appAction";

import { OperationData } from "../../../../redux/data/dataReducer";
import { getUserProfile } from "../../../../redux/user/usersSelector";
import { getStateModalAddChannel } from "../../../../redux/app/appSelector";

import {
  FormMain,
  WrapperFormMain,
  FormMainList,
  FormMainItem,
  FormMainLabel,
  FormMainInput,
  ModalSection,
  ModalWrapper,
  BtnWrapper,
  BtnForm,
} from "../../../../globalStyled/form.styled";
import { GlobalState } from "../../../../redux/typeState";
import { useState } from "react";

import {
  Ant_SectionForm,
  Ant_FormMain,
  Ant_FormMainLabel,
  Ant_FormMainInput,
  Ant_BtnMainForm,
} from "./../../../Registration/FormMain.styled";

import { Ant_BtnAddRoomForm, Ant_BtnWrap } from "./CreateRoom.styled";
import { Button } from "react-native";

export const CreateRoom = () => {
  const dispatch = useDispatch();

  const userProfile = useSelector((state) => getUserProfile(state));
  // const isModalAddChannel = useSelector((state) =>
  //   getStateModalAddChannel(state)
  // );

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

  const onCreateRoomSubmit = () => {
    if (!validNameRoom) {
      console.log("111");
      return;
    }
    dispatch(
      OperationData.createChannel(
        nameRoom,
        [userProfile.userId],
        [userProfile.userId]
      )
    );
  };

  return (
    <Ant_SectionForm>
      <Ant_FormMain>
        <Ant_FormMainLabel>Enter name room</Ant_FormMainLabel>
        <Ant_FormMainInput
          type="text"
          id="room-text"
          placeholder="name room"
          value={nameRoom}
          onChangeText={onChangeTextNewRoom}
        />

        <Ant_BtnWrap>
          <Ant_BtnMainForm title="Add room" onPress={onCreateRoomSubmit} />
          {/* <Ant_BtnMainForm title="Clear" /> */}
        </Ant_BtnWrap>
      </Ant_FormMain>
    </Ant_SectionForm>
  );
};
