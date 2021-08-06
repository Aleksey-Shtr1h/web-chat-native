import React, { useState } from "react";
import { TextLoader } from "react-native-indicator";
import {
  Ant_BtnMainFormText,
  Ant_BtnMainFormWrap,
} from "./../../../globalStyled/FormMain.styled";

export const MainBtnForm = ({
  nameBtn = "Name",
  onPressCommand,
  isDisabled = false,
}) => {
  const [loading, setLoading] = useState(false);

  const toggleLoading = () => {
    setLoading(true);
    onPressCommand();
    setLoading(false);
  };

  // const color = isDisabled ? "grey" : "blue";

  return (
    <Ant_BtnMainFormWrap
      onPress={toggleLoading}
      // style={{ backgroundColor: color }}
      disabled={isDisabled}
    >
      {loading ? (
        <TextLoader
          text="Loading"
          textStyle={{
            fontSize: 18,
            color: "#000000ab",
            fontWeight: "700",
            paddingTop: "1%",
            paddingBottom: "1%",
            paddingLeft: "2%",
            paddingRight: "2%",
          }}
        />
      ) : (
        <Ant_BtnMainFormText>{nameBtn}</Ant_BtnMainFormText>
      )}
    </Ant_BtnMainFormWrap>
  );
};
