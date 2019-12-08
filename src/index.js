import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "./context";
import "./styles.css";
class App extends Component {
  state = {
    number: 10
  };
  inc = () => {
    this.setState(prevState => ({
      number: prevState.number + 10
    }));
  };
  render() {
    return (
      <Provider value={this.state}>
        <button>hi</button>
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
