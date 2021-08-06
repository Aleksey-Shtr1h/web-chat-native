import React from "react";
import { InputBtnLoad } from "../InputBtnLoad/InputBtnLoad";
import {
  Ant_FormMainInput,
  Ant_FormMainInputWrap,
  Ant_FormMainLabel,
} from "./../../../globalStyled/FormMain.styled";
import { InputBtnClear } from "./../InputBtnClear/InputBtnClear";

export const InputMain = ({
  labelName,
  keyboardType,
  placeholder,
  secureTextEntry,
  stateValue,
  onChangeText,
  onBtnPress,
  onValidStateValue,
  setStateValue,
  editable,
  btnRigth,
}) => {
  return (
    <>
      <Ant_FormMainLabel>{labelName}</Ant_FormMainLabel>

      <Ant_FormMainInputWrap>
        <Ant_FormMainInput
          keyboardType={keyboardType}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          value={stateValue}
          onChangeText={(text) => onChangeText(text, setStateValue)}
          editable={editable}
        />
        {btnRigth === "clear" && (
          <InputBtnClear
            onClearTextPress={onBtnPress}
            setState={setStateValue}
            onValidStateValue={onValidStateValue(stateValue)}
          />
        )}

        {btnRigth === "load" && (
          <InputBtnLoad onLoadFilePress={onBtnPress} setState={setStateValue} />
        )}
      </Ant_FormMainInputWrap>
    </>
  );
};
