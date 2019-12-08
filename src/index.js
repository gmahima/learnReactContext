import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "./context";
import "./styles.css";
import Show from "./show";
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
        <Show />
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
