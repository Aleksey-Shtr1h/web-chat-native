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
    "https://firebasestorage.googleapis.com/v0/b/web-chat-1b38f.appspot.com/o/images%2Fdefault%2Fsocial-network%2Ffb.svg?alt=media&token=ca5ba032-6b7b-4649-add7-a2be79f3e799",
  vk: "https://firebasestorage.googleapis.com/v0/b/web-chat-1b38f.appspot.com/o/images%2Fdefault%2Fsocial-network%2Fvk.svg?alt=media&token=348fce00-fb36-4006-bce9-a7f140a45ac9",
  twitter:
    "https://firebasestorage.googleapis.com/v0/b/web-chat-1b38f.appspot.com/o/images%2Fdefault%2Fsocial-network%2Ftw.svg?alt=media&token=b1c9a776-9bed-4945-9580-058f1e52c01d",
  linkendin:
    "https://firebasestorage.googleapis.com/v0/b/web-chat-1b38f.appspot.com/o/images%2Fdefault%2Fsocial-network%2Fin.svg?alt=media&token=dbef5f68-3a04-4a32-ab51-4dd16f4f9398",
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
