import React from "react";
import {
  Ant_BtnInputClearImage,
  Ant_BtnInputClearWrap,
} from "../../../globalStyled/FormMain.styled";

export const InputBtnClear = ({
  onClearTextPress,
  setState,
  onValidStateValue,
}) => {
  return (
    <>
      {onValidStateValue && (
        <Ant_BtnInputClearWrap onPress={() => onClearTextPress(setState)}>
          <Ant_BtnInputClearImage
            source={require("../../../assets/images/close-btn.png")}
          />
        </Ant_BtnInputClearWrap>
      )}
    </>
  );
};
