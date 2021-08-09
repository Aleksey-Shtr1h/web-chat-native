import React from "react";
import { InputBtnLoad } from "../InputBtnLoad/InputBtnLoad";
import {
  Ant_FormMainInput,
  Ant_FormMainInputWrap,
  Ant_FormMainLabel,
} from "../../../globalStyled/FormMain.styled";
import { InputBtnClear } from "../InputBtnClear/InputBtnClear";

export const InputTextAreaMain = ({
  labelName,
  keyboardType,
  placeholder,
  secureTextEntry,
  stateValue,
  setStateValue,
  editable,
  multiline,
  numberOfLines,
  maxLength,
  onChangeText,
  onBtnPress,
  onValidStateValue,
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
          editable={editable}
          multiline={multiline}
          numberOfLines={numberOfLines}
          maxLength={maxLength}
          onChangeText={(text) => onChangeText(text, setStateValue)}
        />
        <InputBtnClear
          onClearTextPress={onBtnPress}
          setState={setStateValue}
          onValidStateValue={onValidStateValue(stateValue)}
        />
      </Ant_FormMainInputWrap>
    </>
  );
};
