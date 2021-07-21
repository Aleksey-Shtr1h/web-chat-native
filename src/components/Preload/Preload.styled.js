import styled from "styled-components/native";

export const Ant_PreloadContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  height: 100%;
`;

export const Ant_PreloadText = styled.Text`
  font-size: 16px;
  font-weight: 600;

  color: ${({ color }) => (color ? color : "#ffffff")};
`;
