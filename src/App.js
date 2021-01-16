//----> imports
import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// styles
import './App.scss';

// components
import Projects from './Pages/Projects'
import Home from './Pages/Home'
import About from './Pages/About'
//import Python from './Pages/Python'
import Contact from './Pages/Contact'
//import Nav from './Components/Nav'
import Burger from './Components/Burger';
import Menu from './Components/Menu';
import { useOnClickOutside } from './hooks';

function App() {

  const [open, setOpen] = useState(false);
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));

   return (
     <div>
         {/* <Nav /> */}

      
        <Router id="body">
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/contact">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
          </Switch>
        </Router>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>

    </div>
  );
}

export default App;
