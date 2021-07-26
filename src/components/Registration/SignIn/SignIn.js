import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { OperationUser } from "../../../redux/user/userReducer";
import {
  Ant_SectionForm,
  Ant_FormMain,
  Ant_FormMainLabel,
  Ant_FormMainInput,
  Ant_FormMainInputWrap,
} from "../../../globalStyled/FormMain.styled";

import { InputBtnClear } from "../../Solid/InputBtnClear/InputBtnClear";
import { MainBtnForm } from "./../../Solid/MainBtnForm/MainBtnForm";

export const SignIn = () => {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const dispatch = useDispatch();

  const validEmail = email !== `` ? true : false;
  const validPassword = password !== `` ? true : false;

  const onChangeText = (text, setState) => {
    setState(text);
  };

  const onClearTextPress = (setState) => {
    setState(``);
  };

  const onSubmitSignIn = () => {
    if (!validPassword || !validEmail) {
      return;
    }

    dispatch(OperationUser.userAuth(email, password));
  };

  return (
    <Ant_SectionForm>
      <Ant_FormMain>
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
          <InputBtnClear
            onClearTextPress={onClearTextPress}
            setState={setPassword}
            validValue={validPassword}
          />
        </Ant_FormMainInputWrap>

        <MainBtnForm nameBtn={"Sign In"} onPressCommand={onSubmitSignIn} />
      </Ant_FormMain>
    </Ant_SectionForm>
  );
};
