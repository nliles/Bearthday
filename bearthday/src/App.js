import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/home/HomePage';
import ImageView from './components/images/ImageView';

function App() {
  return (
    <Router>
       <NavBar />
       <Switch>
         <Route exact path="/" component={HomePage} />
         <Route exact
         path="/images/:date"
         component={ImageView}/>
       </Switch>
   </Router>
  );
}

export default App;
