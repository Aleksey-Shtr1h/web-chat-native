import React from "react";
import { SvgUri } from "react-native-svg";
import { View, TouchableOpacity, Text, Linking } from "react-native";

import {
  Ant_FlexColumnWrap,
  Ant_FlexColumnWrapPress,
  Ant_IconImage,
} from "../../../globalStyled/Global.styled";

export const IconBtnLink = ({
  urlLink = false,
  urlIcon = false,
  component = false,
  width = 50,
  height = 50,
  bdr = "1px solid #ffffff00",
  bgd = "#ffffff00",
}) => {
  const Component = component;
  const handlePress = async (url) => {
    if (url) {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }
  };

  const test = (val) => {
    return (val / 100) * 30;
  };

  return (
    <>
      {urlIcon && (
        <Ant_FlexColumnWrapPress
          m="1%"
          p="3%"
          brs="50px"
          ai="center"
          jc="center"
          asf="baseline"
          bdr={bdr}
          bg={bgd}
          w={`${width}px`}
          h={`${height}px`}
          onPress={() => handlePress(urlLink)}
        >
          <SvgUri
            width={`${width - test(width)}px`}
            height={`${height - test(height)}px`}
            fill="black"
            uri={urlIcon}
          />
        </Ant_FlexColumnWrapPress>
      )}
      {component && (
        <Ant_FlexColumnWrap p="3%" bg="red" brs="50px" asf="baseline">
          {component && <Component />}
        </Ant_FlexColumnWrap>
      )}
    </>
  );
};
