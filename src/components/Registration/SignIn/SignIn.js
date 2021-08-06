import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { OperationUser } from "../../../redux/user/userReducer";
import {
  Ant_SectionForm,
  Ant_FormMain,
} from "../../../globalStyled/FormMain.styled";

import { MainBtnForm } from "./../../Solid/MainBtnForm/MainBtnForm";
import { InputMain } from "./../../Solid/InputMain/InputMain";
import { onPressEvents } from "./../../../utils/utils";
import { Ant_FlexRowWrap } from "../../../globalStyled/Global.styled";

export const SignIn = () => {
  const [email, setEmail] = useState(`4@mail.ru`);
  const [password, setPassword] = useState(`123456`);
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch();

  const { onChangeText, onValidStateValue, onClearTextPress } = onPressEvents;

  const onSubmitSignIn = async () => {
    if (!onValidStateValue(email) || !onValidStateValue(password)) {
      setIsDisabled(false);
      return;
    }
    setIsDisabled(true);

    await new Promise((resolve, reject) => {
      resolve(dispatch(OperationUser.userAuth(email, password)));
      reject(setIsDisabled(false));
    });
  };

  return (
    <Ant_SectionForm>
      <Ant_FormMain>
        <InputMain
          labelName={"Email"}
          keyboardType={"email-address"}
          placeholder={"email@gmail.com"}
          stateValue={email}
          setStateValue={setEmail}
          secureTextEntry={false}
          editable={true}
          btnRigth={"clear"}
          onChangeText={onChangeText}
          onBtnPress={onClearTextPress}
          onValidStateValue={onValidStateValue}
        />

        <InputMain
          labelName={"Password"}
          keyboardType={"default"}
          placeholder={"*********"}
          stateValue={password}
          setStateValue={setPassword}
          secureTextEntry={true}
          editable={true}
          btnRigth={"clear"}
          onChangeText={onChangeText}
          onBtnPress={onClearTextPress}
          onValidStateValue={onValidStateValue}
        />

        <MainBtnForm
          nameBtn={"Sign In"}
          onPressCommand={onSubmitSignIn}
          isDisabled={isDisabled}
        />
      </Ant_FormMain>
    </Ant_SectionForm>
  );
};
