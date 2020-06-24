import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { auth } from './firebase/config';

import Header from "./components/Header";
import Notification from "./components/Notification";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import AdminHeader from "./components/AdminHeader";
import "./default.scss";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="top">
          {!this.state.user ? (<Notification />) : (<AdminHeader />)}
          <Header />
        </div>
        <div className="main">
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/cart" component={Cart} />
            <Route exact={true} path="/admin" component={Admin} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
