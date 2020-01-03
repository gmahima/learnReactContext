import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "./context";
import "./styles.css";
import Show from "./show";
const App = () => {

    return (
      <Provider>
        <Show />
      </Provider>
    );
  
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
