import React from "react";
import { Ant_PreloadContainer, Ant_PreloadText } from "./Preload.styled";

export const Preload = ({ color }) => {
  return (
    <Ant_PreloadContainer>
      <Ant_PreloadText color={color}>Loading...</Ant_PreloadText>
    </Ant_PreloadContainer>
  );
};
