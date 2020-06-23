import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Notification from './components/Notification';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import './default.scss';

function App() {
  return (
    <div className="App">
      <div className="top">
        <Notification />
        <Header />
      </div>
      <div className="main">
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
