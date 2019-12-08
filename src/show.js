import React from "react";
import { Consumer } from "./context";
export default function Show() {
  return [
    <Consumer>
      {context => {
        return <h1>{context.number}</h1>;
      }}
    </Consumer>
  ];
}
