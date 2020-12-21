import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.scss';
import Projects from './Pages/Projects'
import Python from './Pages/Python'
import Contact from './Pages/Contact'
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
              <Route exact path="/contact/">
                <Contact />
              </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
