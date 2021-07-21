import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";

export const BurgerBtn = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    >
      <Image
        style={{ width: 35, height: 35 }}
        source={require("../../assets/images/burger.png")}
      />
    </TouchableOpacity>
  );
};
