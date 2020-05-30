//React Components
import React from "react";
import { Switch, Route } from "react-router-dom";

//Custom Components
import HomePage from "./pages/Homepage/Homepage.pages";
import ShopPage from "./pages/shop/shop.pages";
import Header from "./components/header/header.component";

//CSS
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
