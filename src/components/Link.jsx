import React from "react";

const Link = ({ name, src }) => {
  return (
    <div className="link">
      <a href={src}>
        <button>{name}</button>
      </a>
    </div>
  );
};

export default Link;
