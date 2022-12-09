import React from "react";

import Logo from "/logo.svg";

const Header = ({ title, bio }) => {
  return (
    <div className="header">
        <img src={Logo} />
      <h1>{title}</h1>
      <p className="bio">{bio}</p>
    </div>
  );
};

export default Header;
