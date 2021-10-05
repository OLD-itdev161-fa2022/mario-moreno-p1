import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import CreateNote from './components/CreateNote';
import "./App.css"
import Home from './components/Home';
import Navbar from './components/Navbar';
import Notes from './components/Notes';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route path="/Home" exact>
        <Home/>
      </Route>
      <Route path ="/notes">
        <Notes/>
      </Route>
      <Route path ="/create">
        <CreateNote/>
      </Route>
    </Router>

  );
}

export default App;
