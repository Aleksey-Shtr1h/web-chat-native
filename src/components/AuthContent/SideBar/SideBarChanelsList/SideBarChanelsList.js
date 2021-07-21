import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

import { SideBarChannelsItem } from "./../SideBarChannelsItem/SideBarChannelsItem";

import { Ant_SideBarChannelListContainer } from "./SideBarChanelsList.styled";

export const SideBarChanelsList = ({ channelsUser }) => {
  const channelsUserSort = Object.values(channelsUser).sort((a, b) => {
    if (a.nameRoom > b.nameRoom) {
      return 1;
    } else {
      return -1;
    }
  });

  return (
    <Ant_SideBarChannelListContainer>
      <FlatList
        data={channelsUserSort}
        renderItem={({ item }) => (
          <SideBarChannelsItem nameRoom={item.nameRoom} idRoom={item.idRoom} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </Ant_SideBarChannelListContainer>
  );
};
