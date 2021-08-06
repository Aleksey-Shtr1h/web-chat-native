import styled from "styled-components/native";

export const Ant_UserNameSettings = styled.Text`
  font-size: 24px;
  font-weight: 800;
`;

export const Ant_UserOnlineSettings = styled.Text`
  font-size: 18px;
  font-weight: 800;

  color: ${(props) => props.color || "black"};
`;

export const Ant_UserStatusSettings = styled.Text`
  font-size: 17px;
  font-weight: 400;

  color: ${(props) => props.color || "black"};

  padding: 3% 2%;
  margin-bottom: 5%;

  background: #ececec;

  border-radius: 5px;
  border: 2px solid #dddfe3;
`;
