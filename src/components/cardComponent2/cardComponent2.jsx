import React from "react";
import "../../images/bat-man.jpg";

export const CardComponent2 = (props) => {
  return (
    <li classname="list-item-container">
      <img
        classname="list-image"
        src={require("../../images/bat-man.jpg")}
        alt=""
      />
      <div classname="content">
        <h2>Lorem, ipsum dolor.</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
          excepturi quae incidunt ad pariatur ducimus.
        </p>
      </div>
    </li>
  );
};
