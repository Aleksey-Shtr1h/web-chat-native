import styled from "styled-components/native";

export const Ant_SectionForm = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

export const Ant_FormMain = styled.View`
  display: flex;
  flex-direction: column;

  width: 90%;

  padding: 5% 2%;

  border-radius: 10px;

  background-color: #383b3f;
`;

export const Ant_FormMainLabel = styled.Text`
  position: relative;

  align-self: flex-start;

  padding-left: 3%;
  padding-bottom: 1%;

  font-weight: 500;

  color: #fff;
`;

export const Ant_FormMainInputWrap = styled.View`
  position: relative;

  display: flex;
  flex-direction: column;

  border: 1px solid #fff;

  border-radius: 5px;

  background-color: #f4f5f4;

  margin: 2% 0;
`;

export const Ant_FormMainInput = styled.TextInput`
  padding-top: 1%;
  padding-bottom: 1%;
  padding-left: 1%;
`;

export const Ant_BtnInputClearWrap = styled.TouchableOpacity`
  position: absolute;

  top: 25%;
  right: 2%;
`;

export const Ant_BtnInputClearImage = styled.Image`
  width: 20px;
  height: 20px;
`;

export const Ant_BtnMainFormWrap = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;

  align-self: center;

  margin: 0 3%;

  background-color: #03a9f4;

  border-radius: 5px;
`;

export const Ant_BtnMainFormText = styled.Text`
  font-size: 18px;
  font-weight: 700;

  padding: 1% 2%;

  color: #000000ab;
`;
