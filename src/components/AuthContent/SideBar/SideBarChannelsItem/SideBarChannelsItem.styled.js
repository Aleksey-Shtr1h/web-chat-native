import styled from "styled-components/native";

export const Ant_SideBarChannelItemContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  /* align-content: center; */
  /* align-items: center; */

  margin-bottom: 5%;
  padding: 2%;

  width: 100%;

  /* background: #b9b7b72b; */
`;

export const Ant_SideBarChannelIconWrap = styled.View`
  display: flex;

  width: 50px;
  height: 50px;

  margin-right: 5%;

  border-radius: 50px;

  background: #ffffff;
`;

export const Ant_SideBarChannelIcon = styled.Text`
  align-self: center;

  font-size: 30px;
  font-weight: 800;

  color: red;
`;

export const Ant_SideBarChannelInfoWrap = styled.View`
  display: flex;
  justify-content: center;

  width: 100%;

  border-style: solid;
  border-bottom-width: 0.5px;
  border-bottom-color: grey;
`;

export const Ant_SideBarChannelNameRoom = styled.Text`
  flex: 0 1 50%;

  font-size: 18px;
  font-weight: 800;

  padding-left: 3%;

  color: #ffffff;
`;
