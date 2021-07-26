import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { OperationUser } from "../../../redux/user/userReducer";

import { InputBtnClear } from "../../Solid/InputBtnClear/InputBtnClear";
import { MainBtnForm } from "./../../Solid/MainBtnForm/MainBtnForm";

import {
  Ant_SectionForm,
  Ant_FormMain,
  Ant_FormMainLabel,
  Ant_FormMainInput,
  Ant_FormMainInputWrap,
} from "../../../globalStyled/FormMain.styled";

export const SignUp = () => {
  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [confirmPassword, setConfirmPassword] = useState(``);
  const dispatch = useDispatch();

  const validPassword =
    password !== `` ? (password === confirmPassword ? true : false) : false;
  const validName = name !== `` ? true : false;
  const validEmail = email !== `` ? true : false;

  const onChangeText = (text, setSate) => {
    setSate(text);
  };

  const onClearTextPress = (setState) => {
    setState(``);
  };

  const onSubmitSignUp = () => {
    if (!validPassword || !validName || !validEmail) {
      return;
    }

    dispatch(OperationUser.userRegistration(name, email, password));
  };

  return (
    <Ant_SectionForm>
      <Ant_FormMain>
        <Ant_FormMainLabel>Name</Ant_FormMainLabel>
        <Ant_FormMainInputWrap>
          <Ant_FormMainInput
            keyboardType="email-address"
            placeholder="email@gmail.com"
            value={name}
            onChangeText={(text) => onChangeText(text, setName)}
          />
          <InputBtnClear
            onClearTextPress={onClearTextPress}
            setState={setName}
            validValue={validName}
          />
        </Ant_FormMainInputWrap>
        <Ant_FormMainLabel>Email</Ant_FormMainLabel>
        <Ant_FormMainInputWrap>
          <Ant_FormMainInput
            keyboardType="email-address"
            placeholder="email@gmail.com"
            value={email}
            onChangeText={(text) => onChangeText(text, setEmail)}
          />
          <InputBtnClear
            onClearTextPress={onClearTextPress}
            setState={setEmail}
            validValue={validEmail}
          />
        </Ant_FormMainInputWrap>
        <Ant_FormMainLabel>Password</Ant_FormMainLabel>
        <Ant_FormMainInputWrap>
          <Ant_FormMainInput
            keyboardType="default"
            secureTextEntry={true}
            placeholder="*********"
            value={password}
            onChangeText={(text) => onChangeText(text, setPassword)}
          />
        </Ant_FormMainInputWrap>
        <Ant_FormMainLabel>Confirm Password</Ant_FormMainLabel>
        <Ant_FormMainInputWrap>
          <Ant_FormMainInput
            keyboardType="default"
            secureTextEntry={true}
            placeholder="*********"
            value={confirmPassword}
            onChangeText={(text) => onChangeText(text, setConfirmPassword)}
          />
        </Ant_FormMainInputWrap>
        <MainBtnForm nameBtn={"Sign Up"} onPressCommand={onSubmitSignUp} />
      </Ant_FormMain>
    </Ant_SectionForm>
  );
};
