import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { OperationData } from "../../../../../redux/data/dataReducer";
import { getDays } from "../../../../../utils/utils";

import { ChatDayItem } from "../ChatDayItem/ChatDayItem";

import {
  getMessangesList,
  getSelectRoom,
} from "./../../../../../redux/data/dataSelector";

import { Ant_DesktopChatDayList } from "./ChatDayList.styled";

export const ChatDayList = () => {
  const dayListRef = useRef();
  const messanges = useSelector((state) => getMessangesList(state));

  const daysMessanges = useMemo(() => {
    if (messanges) {
      return getDays(messanges);
    }
  }, [messanges]);

  const days = daysMessanges ? Object.entries(daysMessanges) : null;

  // useEffect(() => {
  //   if (dayListRef) {
  //     dayListRef.current.scrollToEnd();
  //   }
  // }, [messanges]);

  return (
    <>
      {days && (
        <Ant_DesktopChatDayList
          ref={dayListRef}
          data={days}
          renderItem={({ item }) => (
            <>
              <ChatDayItem day={item} />
            </>
          )}
          keyExtractor={(item, index) => index.toString()}
          onContentSizeChange={() =>
            dayListRef.current.scrollToEnd({ animated: true })
          }
          onLayout={() => dayListRef.current.scrollToEnd({ animated: true })}
        />
      )}
    </>
  );
};
