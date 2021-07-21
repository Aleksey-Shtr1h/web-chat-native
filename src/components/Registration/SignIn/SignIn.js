import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { OperationUser } from "../../../redux/user/userReducer";
import {
  Ant_SectionForm,
  Ant_FormMain,
  Ant_FormMainLabel,
  Ant_FormMainInput,
  Ant_BtnMainForm,
} from "../FormMain.styled";

export const SignIn = () => {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const dispatch = useDispatch();

  const validEmail = email !== `` ? true : false;
  const validPassword = password !== `` ? true : false;

  const onChangeEmail = (text) => {
    setEmail(text);
  };

  const onChangePassword = (text) => {
    setPassword(text);
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
        <Ant_FormMainInput
          keyboardType="email-address"
          placeholder="email@gmail.com"
          value={email}
          onChangeText={onChangeEmail}
        />
        <Ant_FormMainLabel>Password</Ant_FormMainLabel>
        <Ant_FormMainInput
          keyboardType="default"
          secureTextEntry={true}
          placeholder="*********"
          value={password}
          onChangeText={onChangePassword}
        />
        <Ant_BtnMainForm title="Sign In" onPress={onSubmitSignIn} />
      </Ant_FormMain>
    </Ant_SectionForm>
  );
};
