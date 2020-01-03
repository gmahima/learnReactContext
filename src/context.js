import React, {createContext, useState} from "react";

export const Context = createContext(null);

export const Provider = (props) => {
    const [number, setNumber] = useState(0);
const increment = () => {
    setNumber(number + 10);
}
    return (
        <Context.Provider value={
            {number: number, increment: increment}
        }>
            {props.children}
        </Context.Provider>
    )
}
