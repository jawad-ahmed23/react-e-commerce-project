//React Components
import React from "react";
import { Switch, Route, Link } from "react-router-dom";

//Custom Components
import HomePage from "./pages/Homepage/Homepage.pages";

//CSS
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={HomePage} />
      </div>
    );
  }
}

export default App;
