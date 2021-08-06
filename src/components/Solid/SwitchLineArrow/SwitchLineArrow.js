import React, { useState } from "react";
import { View, Text } from "react-native";

import {
  Ant_FlexColumnWrap,
  Ant_SwitchLine,
  Ant_SwitchLineIcon,
  Ant_SwitchLineText,
  Ant_SwitchLineWrap,
  Ant_SwitchListWrap,
} from "../../../globalStyled/Global.styled";

export const SwitchLineArrow = ({ component }) => {
  const Component = component;
  const [toggleBtn, setToggleBtn] = useState(false);

  const toggleBtnPress = () => {
    setToggleBtn(!toggleBtn);
  };

  return (
    <Ant_FlexColumnWrap m="0 0 10% 0">
      <Ant_SwitchLineWrap ai="center" onPress={toggleBtnPress}>
        <Ant_SwitchLineIcon
          toggleBtn={toggleBtn}
          source={require("../../../assets/images/arrow-switch.png")}
        />
        <Ant_FlexColumnWrap w="90%" m="0 0 0 3%" jc="center">
          <Ant_SwitchLineText color={toggleBtn}>Name</Ant_SwitchLineText>
          <Ant_SwitchLine bgc={toggleBtn} />
        </Ant_FlexColumnWrap>
      </Ant_SwitchLineWrap>
      {toggleBtn && (
        <Ant_SwitchListWrap>
          <Component />
        </Ant_SwitchListWrap>
      )}
    </Ant_FlexColumnWrap>
  );
};
