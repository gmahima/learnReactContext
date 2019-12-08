import React from "react";
import { Consumer } from "./context";
import Child from "./child";
export default function Show() {
  return (
    <div>
      <Consumer>
        {context => {
          return <h1>{context.number}</h1>;
        }}
      </Consumer>
      <Child />
    </div>
  );
}
