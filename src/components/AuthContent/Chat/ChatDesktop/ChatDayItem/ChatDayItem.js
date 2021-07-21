import React from "react";
import { View, Text } from "react-native";
import { ChatMessangesList } from "../ChatMessangesList/ChatMessangesList";
import {
  Ant_ChatDayItemWrap,
  Ant_ChatDayInfoWrap,
  Ant_ChatDayTime,
} from "./ChatDayItem.styled";

export const ChatDayItem = ({ day }) => {
  return (
    <>
      {day[0] !== "Loading" && (
        <Ant_ChatDayItemWrap>
          <Ant_ChatDayInfoWrap>
            <Ant_ChatDayTime>{day[0]}</Ant_ChatDayTime>
          </Ant_ChatDayInfoWrap>
        </Ant_ChatDayItemWrap>
      )}
      <ChatMessangesList comments={day[1]} />
    </>
  );
};
