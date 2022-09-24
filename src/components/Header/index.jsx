import React from "react";
import InfoCard from "../InfoCard";
import Search from "../Search";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>IP Address Tracker</h1>
      <Search />
      <InfoCard />
    </div>
  );
};

export default Header;
