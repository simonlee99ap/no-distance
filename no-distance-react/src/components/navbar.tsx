import React, { useState } from "react";
import { Menu } from "antd";
import { MenuClickEventHandler } from "rc-menu/lib/interface";
import "antd/dist/antd.css";

const NAV_PAGES = ["Home", "Photo Gallery", "Our Calendar", "Our Todos"];

export interface NavbarProps {
  onMenuSelect: MenuClickEventHandler;
}

export const Navbar = (props: NavbarProps) => {
  return (
    <Menu className="navbar" onClick={props.onMenuSelect} mode="horizontal">
      {NAV_PAGES.map((label: string) => (
        <Menu.Item key={label}>{label}</Menu.Item>
      ))}
    </Menu>
  );
};
