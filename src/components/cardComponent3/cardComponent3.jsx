import React from "react";
import "../../images/spider-man.jpg";

export const CardComponent3 = (props) => {
  return (
    <li classname="list-item-container">
      <img
        classname="list-image"
        src={require("../../images/spider-man.jpg")}
        alt=""
        srcset=""
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
