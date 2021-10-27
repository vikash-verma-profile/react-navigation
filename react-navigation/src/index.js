import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';


const routing = (
  <Router>
    <div>
      <Link to="/" >Home</Link>
      <Link to="/about">About </Link>
      <Link to="/contact">Contact</Link>
    </div>

    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
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
