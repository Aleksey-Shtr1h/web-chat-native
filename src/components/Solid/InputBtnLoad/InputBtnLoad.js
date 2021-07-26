import React from "react";
import {
  Ant_BtnInputClearImage,
  Ant_BtnInputClearWrap,
} from "../../../globalStyled/FormMain.styled";

export const InputBtnLoad = ({ onLoadFilePress, setState }) => {
  return (
    <>
      <Ant_BtnInputClearWrap onPress={() => onLoadFilePress(setState)}>
        <Ant_BtnInputClearImage
          source={require("../../../assets/images/upload.png")}
        />
      </Ant_BtnInputClearWrap>
    </>
  );
};
