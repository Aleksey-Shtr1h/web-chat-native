import React from "react";
import {
  Ant_BtnMainFormText,
  Ant_BtnMainFormWrap,
} from "./../../../globalStyled/FormMain.styled";

export const MainBtnForm = ({ nameBtn = "Name", onPressCommand }) => {
  return (
    <Ant_BtnMainFormWrap onPress={onPressCommand}>
      <Ant_BtnMainFormText>{nameBtn}</Ant_BtnMainFormText>
    </Ant_BtnMainFormWrap>
  );
};
