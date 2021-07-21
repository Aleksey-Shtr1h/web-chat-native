import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";

import { getUserProfile } from "./../../../../redux/user/usersSelector";

import { SideBarChanelsList } from "./../SideBarChanelsList/SideBarChanelsList";
import { Preload } from "./../../../Preload/Preload";
import { getTogglePreloadChannels } from "../../../../redux/app/appSelector";

export const SideBarChanelsBlock = () => {
  const userProfile = useSelector((state) => getUserProfile(state));
  const isPreloadChannels = useSelector((state) =>
    getTogglePreloadChannels(state)
  );

  const channelsUser = userProfile?.channelsUser
    ? userProfile?.channelsUser
    : [];

  if (isPreloadChannels) {
    return <Preload color={"#ffffff"} />;
  }

  return (
    <>
      {channelsUser.length !== 0 ? (
        <SideBarChanelsList channelsUser={channelsUser} />
      ) : (
        <Text>No Channels</Text>
      )}
    </>
  );
};
