import React, { useCallback, useEffect, useState } from "react";
import { Text, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { OperationApp } from "../../../redux/app/appReducer";
import {
  getStateSideBarArrowBtn,
  getStateUserInfoArrowBtn,
  getSubscribedUser,
  getTogglePreloadMessanges,
} from "../../../redux/app/appSelector";

import {
  getMessangesList,
  getSelectRoom,
} from "../../../redux/data/dataSelector";
import { getUserProfile } from "../../../redux/user/usersSelector";

import { Ant_ChannelDesktopChat } from "./ChannelBox.Styled";
import { ChatDayList } from "./ChatDesktop/ChatDayList/ChatDayList";
import { SubscribeButton } from "./SubscribeButton/SubscribeButton";
import { FormMessages } from "./ChatDesktop/FormMessages/FormMessages";
import { OperationData } from "../../../redux/data/dataReducer";
import { getTogglePreloadUsers } from "./../../../redux/app/appSelector";
import { Preload } from "./../../Preload/Preload";

export const ChannelBox = () => {
  const dispatch = useDispatch();

  const [isSubscribed, setIsSubscribed] = useState(false);

  const isPreloadMessanges = useSelector((state) =>
    getTogglePreloadMessanges(state)
  );
  const isPreloadUsers = useSelector((state) => getTogglePreloadUsers(state));

  const selectRoom = useSelector((state) => getSelectRoom(state));
  const userProfile = useSelector((state) => getUserProfile(state));

  const usersRoom = selectRoom?.usersRoom;
  const userId = userProfile?.userId;

  const initCheckUser = useCallback(() => {
    if (usersRoom && userId) {
      const isSubscribedUser = usersRoom.includes(userId);
      setIsSubscribed(isSubscribedUser);
    }
  }, [dispatch, selectRoom, userProfile]);

  const initGetUsers = useCallback(() => {
    if (selectRoom) {
      dispatch(OperationData.loadUsers(selectRoom, true));
    }
  }, [dispatch, selectRoom]);

  useEffect(() => {
    if (!isPreloadMessanges) {
      initGetUsers();
      initCheckUser();
    }
  }, [isPreloadMessanges, initCheckUser, initGetUsers]);

  if (isPreloadUsers) {
    return (
      <Ant_ChannelDesktopChat>
        <Preload color={"#3577ef"} />
      </Ant_ChannelDesktopChat>
    );
  }

  return (
    <>
      {!isPreloadUsers && (
        <Ant_ChannelDesktopChat>
          {isSubscribed ? (
            <>
              <ChatDayList />
              <FormMessages />
            </>
          ) : (
            <SubscribeButton
              selectRoom={selectRoom}
              userProfile={userProfile}
            />
          )}
        </Ant_ChannelDesktopChat>
      )}
    </>
  );
};
