import React from "react";

const Link = ({ name, icon, src }) => {
  return (
    <div className="link">
      <a href={src} target="_blank">
        <button>
          <span className="icon">{icon}</span>
          {name}
        </button>
      </a>
    </div>
  );
};

export default Link;
