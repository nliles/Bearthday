import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/home/HomePage';

const App = () => (
 <Router>
    <NavBar />
    <Switch>
      <Route exact path="/" component={HomeView} />
    </Switch>
</Router>
);

export default App;
