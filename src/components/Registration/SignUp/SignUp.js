import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { OperationUser } from "../../../redux/user/userReducer";

import { MainBtnForm } from "./../../Solid/MainBtnForm/MainBtnForm";

import {
  Ant_SectionForm,
  Ant_FormMain,
} from "../../../globalStyled/FormMain.styled";
import { InputMain } from "../../Solid/InputMain/InputMain";
import { onPressEvents } from "./../../../utils/utils";

export const SignUp = () => {
  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [confirmPassword, setConfirmPassword] = useState(``);
  const dispatch = useDispatch();

  const {
    onChangeText,
    onValidStateValue,
    onValidConfirmStateValue,
    onClearTextPress,
  } = onPressEvents;

  const onSubmitSignUp = () => {
    if (
      !onValidConfirmStateValue(password, confirmPassword) ||
      !onValidStateValue(name) ||
      !onValidStateValue(email)
    ) {
      return;
    }

    dispatch(OperationUser.userRegistration(name, email, password));
  };

  return (
    <Ant_SectionForm>
      <Ant_FormMain>
        <InputMain
          labelName={"Name"}
          keyboardType={"default"}
          placeholder={"Name"}
          stateValue={name}
          setStateValue={setName}
          secureTextEntry={false}
          editable={true}
          btnRigth={"clear"}
          onChangeText={onChangeText}
          onBtnPress={onClearTextPress}
          onValidStateValue={onValidStateValue}
        />

        <InputMain
          labelName={"Email"}
          keyboardType={"email-address"}
          placeholder={"Email@gmail.com"}
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

        <InputMain
          labelName={"Confirm Password"}
          keyboardType={"default"}
          placeholder={"*********"}
          stateValue={confirmPassword}
          setStateValue={setConfirmPassword}
          secureTextEntry={true}
          editable={true}
          btnRigth={"clear"}
          onChangeText={onChangeText}
          onBtnPress={onClearTextPress}
          onValidStateValue={onValidStateValue}
        />
        <MainBtnForm nameBtn={"Sign Up"} onPressCommand={onSubmitSignUp} />
      </Ant_FormMain>
    </Ant_SectionForm>
  );
};
