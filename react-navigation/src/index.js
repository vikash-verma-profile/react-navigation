import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Link, NavLink,Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import NotFound from './NotFound';
import Contacts from './Contacts';


const routing = (
  <Router>
    <div>
      <NavLink to="/" exact activeStyle={{ color: 'red' }}>Home</NavLink>
      <NavLink to="/about" exact activeStyle={{ color: 'green' }} >About </NavLink>
      <NavLink to="/contact" exact activeStyle={{ color: 'brown' }}>Contact</NavLink>
    </div>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/contact/:name" component={Contacts} />
      <Route component={NotFound} />
    </Switch >
  </Router>

);

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
