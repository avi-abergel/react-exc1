import React from "react";

import { CardComponent1 } from "../cardComponent1/cardComponent1";
import { CardComponent2 } from "../cardComponent2/cardComponent2";
import { CardComponent3 } from "../cardComponent3/cardComponent3";

export const ListOfCards = (props) => {
  return (
    <ul classname="list-style">
      <CardComponent1 />
      <CardComponent2 />
      <CardComponent3 />
    </ul>
  );
};
