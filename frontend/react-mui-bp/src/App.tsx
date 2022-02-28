import React from 'react';
import './App.css';
import AppBar from './components/layout/AppBarLayout/AppBar';
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
        <>
          <Router>
            <AppBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </Router>
        </>
  
  );
}

export default App;
