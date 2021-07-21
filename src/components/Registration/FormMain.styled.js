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

export const Ant_FormMainInput = styled.TextInput`
  padding-top: 1%;
  padding-bottom: 1%;
  padding-left: 1%;

  margin: 2% 0;

  border: 1px solid #fff;

  border-radius: 5px;

  background-color: #f4f5f4;
`;

export const Ant_BtnMainForm = styled.Button`
  font-weight: 600;

  background-color: red;

  color: red;

  border-radius: 5px;
`;
