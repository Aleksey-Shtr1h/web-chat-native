import styled from "styled-components/native";

export const Ant_ChatMessangesItemWrap = styled.View`
  position: relative;

  display: flex;
  flex-direction: row;

  width: 100%;

  margin: 1% 0%;

  justify-content: ${({ isHost }) => (isHost ? "flex-end" : "flex-start")};
`;

export const Ant_ChatMessangesItemMessage = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: ${({ isHost }) => (isHost ? "flex-end" : "flex-start")};

  padding-left: 1.5%;

  width: 100%;
`;

export const Ant_ChatMessangesItemMessageWrap = styled.View`
  display: flex;
  flex: 0 1 72%;

  align-items: flex-start;
`;

export const Ant_MessageUserName = styled.Text`
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;

  color: #dc9741;

  padding-right: 5%;
`;

export const Ant_MessageWrap = styled.View`
  display: flex;

  width: 100%;
  padding: 3%;
  background: ${({ isHost }) => (isHost ? "#cfeacf" : "#fff")};
  border-radius: 5px;
`;

export const Ant_MessageText = styled.Text`
  font-weight: 400;
  font-size: 15px;
`;

export const Ant_MessageTime = styled.Text`
  align-self: flex-end;

  font-weight: 400;
  font-size: 13px;
  line-height: 13px;

  color: #8d8d8d;
`;

export const Ant_IconUserWrap = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  flex: 0 1 15%;

  margin-right: 2%;
`;

export const Ant_IconUser = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
