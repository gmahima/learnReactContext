import React, {useContext} from "react";
import { Context } from "./context";
export default function Again() {
  const context = useContext(Context)
  return (
    <div>
     
        
          <button onClick={context.increment}>{context.number}</button>
        
   
    </div>
  );
}
