import React, { useEffect, useRef, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { FlatList } from "react-native";
import {
  Ant_SideBarSearchInput,
  Ant_SideBarSearchList,
  Ant_SideBarSearchWrap,
} from "./SideBarSearchBlock.styled";
import { SideBarSearchItem } from "../SideBarSearchItem/SideBarSearchItem";

export const SideBarSearchBlock = () => {
  const [roomSearch, setRoomSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [valueSearch, setValueSearch] = useState("");
  const inputSearchRef = useRef();

  const focus = () => {
    inputSearchRef.current.focus();
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = firestore()
      .collection(`rooms`)
      .onSnapshot((snapshot) => {
        const dataRoom = snapshot.docs.map((doc) => ({
          ...doc.data(),
        }));

        setRoomSearch(dataRoom);
        setLoading(false);
      });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (search !== "") {
      setSearch(valueSearch);
      setFilteredRooms(
        roomSearch.filter((room) =>
          room.info.nameRoom.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilteredRooms([]);
    }
  }, [search, roomSearch, valueSearch]);

  const onChangeSearchText = (text) => {
    setSearch(text);
    setValueSearch(text);
  };

  return (
    <Ant_SideBarSearchWrap>
      <Ant_SideBarSearchInput
        keyboardType="default"
        ref={inputSearchRef}
        placeholder="Search room"
        value={valueSearch}
        onChangeText={onChangeSearchText}
        onPress={focus}
      />

      <Ant_SideBarSearchList
        data={filteredRooms}
        renderItem={({ item }) => (
          <SideBarSearchItem
            searchItem={item}
            setValueSearch={setValueSearch}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </Ant_SideBarSearchWrap>
  );
};
