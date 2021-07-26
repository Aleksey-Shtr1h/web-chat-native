import styled from "styled-components/native";
import {
  Ant_FormMainInput,
  Ant_FormMainInputWrap,
} from "../../../../../globalStyled/FormMain.styled";

export const Ant_FormMessageWrap = styled.View`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  border-top-width: 1px;
  border-top-color: #000;
  border-style: solid;
`;

export const Ant_FormMessageInputWrap = styled(Ant_FormMainInputWrap)`
  flex: 0 1 80%;

  padding: 0;
  border: none;
`;

export const Ant_FormMessageInput = styled(Ant_FormMainInput)`
  padding: 1% 1%;
  margin: 0 9% 0 0;

  background-color: #f4f5f4;

  font-size: 15px;
  line-height: 15px;
  font-weight: bold;
`;

export const Ant_FormMessageBtn = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 0 1 20%;

  border-radius: 5px;
`;

export const Ant_FormMessageBtnIcon = styled.Image`
  width: 35px;
  height: 35px;
`;
