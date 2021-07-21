import styled from "styled-components/native";

export const Ant_SideBarSearchWrap = styled.View`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const Ant_SideBarSearchInput = styled.TextInput`
  width: 100%;

  padding: 2%;

  border-radius: 5px;
  border: 2px solid grey;

  background: #ffffff;
`;

export const Ant_SideBarSearchList = styled.FlatList`
  width: 100%;

  /* position: absolute; */
  /* top: 125%; */

  background: #ffffff;

  border-radius: 5px;
`;
