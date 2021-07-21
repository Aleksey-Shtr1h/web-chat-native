import React from "react";
import { Ant_SideBarBoxWrapper } from "../SideBar.styled";

export const SideBarBlock = ({ zIndex, children }) => {
  return (
    <Ant_SideBarBoxWrapper style={{ zIndex }}>{children}</Ant_SideBarBoxWrapper>
  );
};
