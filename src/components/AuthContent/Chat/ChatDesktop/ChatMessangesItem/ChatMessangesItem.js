import React from "react";
import { useSelector } from "react-redux";
import { getUserProfile } from "./../../../../../redux/user/usersSelector";
import { chooseUserCoomment } from "./../../../../../redux/data/dataSelector";
import {
  Ant_ChatMessangesItemWrap,
  Ant_ChatMessangesItemMessage,
  Ant_ChatMessangesItemMessageWrap,
  Ant_MessageUserName,
  Ant_MessageWrap,
  Ant_MessageText,
  Ant_MessageTime,
  Ant_IconUserWrap,
  Ant_IconUser,
} from "./ChatMessangesItem.styled";

import { getTimeFormat } from "../../../../../utils/utils";

export const ChatMessangesItem = ({ comment }) => {
  const { message, nameUser, timestamp, userId } = comment;

  const userProfile = useSelector((state) => getUserProfile(state));
  const userComment = useSelector((state) => chooseUserCoomment(state, userId));

  const isHost = userProfile?.userId === userId;

  const userPhoto = userComment?.photoUrl;

  return (
    <Ant_ChatMessangesItemWrap isHost={isHost}>
      <Ant_ChatMessangesItemMessage isHost={isHost}>
        {!isHost && (
          <Ant_IconUserWrap>
            <Ant_IconUser
              source={{
                uri: userPhoto,
              }}
            />
          </Ant_IconUserWrap>
        )}

        <Ant_ChatMessangesItemMessageWrap isHost={isHost}>
          <Ant_MessageWrap isHost={isHost}>
            {!isHost && <Ant_MessageUserName>{nameUser}</Ant_MessageUserName>}
            <Ant_MessageText isHost={isHost}>{message}</Ant_MessageText>

            <Ant_MessageTime>
              {timestamp ? getTimeFormat(timestamp.toDate()) : ""}
            </Ant_MessageTime>
          </Ant_MessageWrap>
        </Ant_ChatMessangesItemMessageWrap>
      </Ant_ChatMessangesItemMessage>
    </Ant_ChatMessangesItemWrap>
  );
};
