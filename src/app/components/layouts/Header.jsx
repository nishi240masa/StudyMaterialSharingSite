import "./Header.scss";
import React from "react";
import Title from "./header/Title";
import Search from "./header/Search";
import Add from "./header/Add";
import UserIcon from "./header/UserIcon";

function Header() {
  return (
    <div className="header">
      <Title />

      <div className="headerRight">
      <Search />
      <Add/>
      <UserIcon/>
      </div>
    </div>
  );
}

export default Header;
