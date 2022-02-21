import React from 'react';
import Navbar from './components/NavBar';
import './App.css';
import Home from './components/Routes/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/Routes/Services';
import Products from './components/Routes/Products';
import SignUp from './components/Routes/SignUp';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
