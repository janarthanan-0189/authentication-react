import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-expand navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/'}>Home</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={'/Signin'} className="nav-link">Sign In</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Signup'} className="nav-link">Sign Up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
            <switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Signin" component={Signin} />
              <Route exact path="/Signup" component={Signup} />
            </switch>
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App;