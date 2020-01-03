import React, {useContext} from "react";
import { Context } from "./context";
import Child from "./child";
export default function Show() {
  const context = useContext(Context);
  return (
    <div>

           <h1>{context.number}</h1>
        
  
      <Child />
    </div>
  );
}
