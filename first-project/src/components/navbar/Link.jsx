import React from "react";

const Link = ({ title, link }) => {
  return (
    <div>
      <a href={link} className="my-4 ml-9 no-underline uppercase">
        {title}
      </a>
    </div>
  );
};

export default Link;
