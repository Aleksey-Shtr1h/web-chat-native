import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import {
  Ant_FlexColumnWrap,
  Ant_FlexRowWrap,
} from "./../../../../globalStyled/Global.styled";

import { getUserProfile } from "./../../../../redux/user/usersSelector";

import { IconBtnLink } from "./../../../Solid/IconBtnLink/IconBtnLink";

const IconSosialNerwork = {
  facebook:
    "https://firebasestorage.googleapis.com/v0/b/web-chat-1b38f.appspot.com/o/images%2Fdefault%2Fsocial-network%2Ffb.svg?alt=media&token=7f8a2d85-5e2b-4ac7-9aae-521b60bf584e",
  vk: "https://firebasestorage.googleapis.com/v0/b/web-chat-1b38f.appspot.com/o/images%2Fdefault%2Fsocial-network%2Fvk.svg?alt=media&token=3e99c821-7f3a-449a-b86e-0f8b749a8db9",
  twitter:
    "https://firebasestorage.googleapis.com/v0/b/web-chat-1b38f.appspot.com/o/images%2Fdefault%2Fsocial-network%2Ftw.svg?alt=media&token=7ba4a9f0-3b92-45e0-90fb-e54017e0b57e",
  linkendin:
    "https://firebasestorage.googleapis.com/v0/b/web-chat-1b38f.appspot.com/o/images%2Fdefault%2Fsocial-network%2Fin.svg?alt=media&token=d31fb319-1ea9-495f-90c0-c73f74483f51",
};

export const SoсialNetwork = () => {
  const userProfile = useSelector((state) => getUserProfile(state));

  const sosialNetworks = userProfile?.sosialNetworks
    ? userProfile?.sosialNetworks
    : {};

  const userSosialNetworks = Object.entries(sosialNetworks);

  return (
    <Ant_FlexRowWrap w="100%">
      {userSosialNetworks.map((sosialNetwork, idx) => {
        const urlIcon = IconSosialNerwork[sosialNetwork[0]];
        return (
          <IconBtnLink
            urlLink={sosialNetwork[1]}
            urlIcon={urlIcon}
            width={50}
            height={50}
            bdr="1px solid #000000"
            bgd="grey"
            key={sosialNetwork[0] + idx}
          />
        );
      })}
    </Ant_FlexRowWrap>
  );
};
