import React from "react";
import { Ant_PreloadContainer, Ant_PreloadText } from "./Preload.styled";
import { CirclesLoader } from "react-native-indicator";

export const Preload = ({ color }) => {
  return (
    <Ant_PreloadContainer>
      <CirclesLoader size={35} color={color} dotRadius={7} />
      {/* <Ant_PreloadText color={color}>Loading...</Ant_PreloadText> */}
    </Ant_PreloadContainer>
  );
};
