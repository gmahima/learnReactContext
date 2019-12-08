import React from "react";
import { Consumer } from "./context";
import Child from "./child";
export default function Again() {
  return (
    <div>
      <Consumer>
        {context => {
          return <button onClick={context.inc}>{context.number}</button>;
        }}
      </Consumer>
    </div>
  );
}
