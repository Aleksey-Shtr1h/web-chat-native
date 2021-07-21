import React from "react";

import { SideBarBlock } from "./SideBar/SideBarBlock/SideBarBlock";
import { SideBar } from "./SideBar/SideBar";

import { SideBarChanelsBlock } from "./SideBar/SideBarChanelsBlock/SideBarChanelsBlock";
import { SideBarSearchBlock } from "./SideBar/SideBarSearchBlock/SideBarSearchBlock";

export const AuthConent = ({ navigation }) => {
  return (
    <SideBar>
      <SideBarBlock zIndex={10}>
        <SideBarSearchBlock />
      </SideBarBlock>

      <SideBarBlock zIndex={1}>
        <SideBarChanelsBlock navigation={navigation} />
      </SideBarBlock>

      {/* <Ant_BtnMainForm title="Sign Out" onPress={onPresSignOut} /> */}
    </SideBar>
  );
};
