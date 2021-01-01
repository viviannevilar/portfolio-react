//----> imports
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// styles
import './App.scss';

// components
import Projects from './Pages/Projects'
import Home from './Pages/Home'
//import Python from './Pages/Python'
import Contact from './Pages/Contact'
//import Nav from './Components/Nav'
import Burger from './Components/Burger';
import Menu from './Components/Menu';

function App() {

  const [open, setOpen] = useState(false);

   return (
     <div>
         {/* <Nav /> */}

      
        <Router id="body">
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/projects/">
                <Projects />
              </Route>
              <Route path="/contact">
                <Home />
              </Route>
          </Switch>
        </Router>
        <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>

    </div>
  );
}

export default App;
