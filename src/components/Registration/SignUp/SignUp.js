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

export const SignUp = () => {
  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [confirmPassword, setConfirmPassword] = useState(``);
  const dispatch = useDispatch();

  const validPassword =
    password !== `` ? (password === confirmPassword ? true : false) : false;
  const validEmail = email !== `` ? true : false;
  const validName = name !== `` ? true : false;

  const onChangeName = (text) => {
    setName(text);
  };

  const onChangeEmail = (text) => {
    setEmail(text);
  };

  const onChangePassword = (text) => {
    setPassword(text);
  };

  const onChangeConfirmPassword = (text) => {
    setConfirmPassword(text);
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
        <Ant_FormMainInput
          keyboardType="email-address"
          placeholder="email@gmail.com"
          value={name}
          onChangeText={onChangeName}
        />
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
        <Ant_FormMainLabel>Confirm Password</Ant_FormMainLabel>
        <Ant_FormMainInput
          keyboardType="default"
          secureTextEntry={true}
          placeholder="*********"
          value={confirmPassword}
          onChangeText={onChangeConfirmPassword}
        />
        <Ant_BtnMainForm title="Sign Up" onPress={onSubmitSignUp} />
      </Ant_FormMain>
    </Ant_SectionForm>
  );
};
