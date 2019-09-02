import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Contact from "./components/Contact";
import Grid from "./components/Grid";
import List from "./components/List";
import Master_Detail from "./components/Master_Detail";
import Home from "./components/Home";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Redirect exact path = "/" to = "/Home" />
          <Route path = "/Home" component = { Home } />
          <Route path = "/Contact" component = { Contact } />
          <Route path = "/Grid" component = { Grid } />
          <Route path = "/List" component = { List } />
          <Route path = "/Master_Detail" component = { Master_Detail } />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
