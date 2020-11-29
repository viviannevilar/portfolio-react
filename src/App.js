import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import './App.scss';
import Projects from './Pages/Projects'
import Python from './Pages/Python'
import Nav from './Components/Nav'

function App() {

   return (
     <div>
         {/* <Nav /> */}
      
        <Router id="body">
          <Switch>
              <Route exact path="/">
                <Projects />
              </Route>
              <Route exact path="/python">
                <Python />
              </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
