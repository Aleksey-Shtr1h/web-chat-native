import styled from "styled-components/native";
import {
  Ant_BtnMainForm,
  Ant_FormMainInput,
} from "../../../../Registration/FormMain.styled";

export const Ant_FormMessageWrap = styled.View`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  padding-top: 1%;
  padding-bottom: 1%;

  border-radius: 5px;
  border: 1px solid #000;
`;

export const Ant_FormMessageInput = styled(Ant_FormMainInput)`
  flex: 0 1 80%;

  padding: 1% 1%;
  margin: 0 1%;

  /* border-radius: 5px; */
  /* border: 1px solid #000; */

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

  /* background-color: #03a9f4; */

  border-radius: 5px;
`;

export const Ant_FormMessageBtnIcon = styled.Image`
  width: 35px;
  height: 35px;
`;

// export const Ant_FormMessageBtnText = styled.Image`
//   width: 50px;
//   height: 50px;
//   border-radius: 50px;

//   border: 1px solid red;
// `;
