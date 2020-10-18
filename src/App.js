import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import CheckOut from "./components/CheckOut";
import Login from "./components/Login";
import { auth } from "./firebase";
import { setUser } from "./actions/ActionTypes";

function App(props) {
  useEffect(() => {
    const unAuth = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        props.setUser(authUser);
      } else {
        props.setUser(null);
      }
      return () => {
        unAuth();
      };
    });
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Header></Header>
          <Home></Home>
        </Route>
        <Route path="/checkout">
          <Header></Header>
          <CheckOut></CheckOut>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { setUser })(App);
