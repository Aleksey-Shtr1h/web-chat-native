import styled from "styled-components/native";

export const Ant_ChatDayItemWrap = styled.View`
  display: flex;
  flex-direction: column;

  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #0000003d;
  position: relative;
`;

export const Ant_ChatDayInfoWrap = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 10px;
`;

export const Ant_ChatDayTime = styled.Text`
  position: absolute;
  top: -10px;

  font-weight: 400;
  font-size: 16px;
  text-transform: capitalize;

  padding: 0 3%;

  color: #3577ef;

  background: #f1f1f1;
`;
