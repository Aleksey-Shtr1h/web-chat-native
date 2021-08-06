import React from "react";
import { View, Text } from "react-native";
import { MainBtnForm } from "./../../../Solid/MainBtnForm/MainBtnForm";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { getUserProfile } from "./../../../../redux/user/usersSelector";

import { SvgUri } from "react-native-svg";

import {
  Ant_FlexColumnWrap,
  Ant_FlexRowWrap,
  Ant_IconImage,
  Ant_SwitchLine,
  Ant_SwitchLineIcon,
  Ant_SwitchLineWrap,
} from "./../../../../globalStyled/Global.styled";
import {
  Ant_UserNameSettings,
  Ant_UserOnlineSettings,
  Ant_UserStatusSettings,
} from "./SettingsUser.styled";
import { SwitchLineArrow } from "../../../Solid/SwitchLineArrow/SwitchLineArrow";
import { SoсialNetwork } from "../../UserInfo/SoсialNetwork/SoсialNetwork";
import Icon from "../../../../assets/images/vk.svg";

export const SettingsUser = () => {
  const navigation = useNavigation();
  const userProfile = useSelector((state) => getUserProfile(state));

  const userPhoto = userProfile?.photoUrl?.path;
  const userName = userProfile?.info?.name;
  const userOnline = userProfile?.status?.state;
  const userStatus = userProfile?.statusDiscription;
  const colorStateOnline = userOnline === "online" ? "#2cc726" : "grey";

  const changeUserProfileSetting = () => {
    navigation.navigate("ChangeUserProfileInfo");
  };
  return (
    <Ant_FlexColumnWrap m="0 5%">
      <Ant_FlexRowWrap jc="flex-start" ai="flex-start" w="100%" m="3% 0">
        <Ant_FlexColumnWrap mr="5%">
          <Ant_IconImage
            w="100"
            h="100"
            source={{
              uri: userPhoto,
            }}
          />
        </Ant_FlexColumnWrap>
        <Ant_FlexColumnWrap asf="center">
          <Ant_UserNameSettings>{userName}</Ant_UserNameSettings>
          <Ant_UserOnlineSettings color={colorStateOnline}>
            {userOnline}
          </Ant_UserOnlineSettings>
        </Ant_FlexColumnWrap>
      </Ant_FlexRowWrap>

      <SwitchLineArrow component={SoсialNetwork} />

      <MainBtnForm
        nameBtn={"Изменить данные"}
        onPressCommand={changeUserProfileSetting}
      />
    </Ant_FlexColumnWrap>
  );
};
