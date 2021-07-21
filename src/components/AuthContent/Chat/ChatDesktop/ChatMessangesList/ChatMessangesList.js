import React from "react";
import { FlatList } from "react-native";
import { ChatMessangesItem } from "./../ChatMessangesItem/ChatMessangesItem";

import { Ant_ChatMessangesList } from "./ChatMessangesList.styled";

export const ChatMessangesList = ({ comments }) => {
  return (
    <Ant_ChatMessangesList
      data={comments}
      renderItem={({ item }) => <ChatMessangesItem comment={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
