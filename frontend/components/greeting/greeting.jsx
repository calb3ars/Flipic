import React from 'react';
import { Link } from 'react-router';

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-name">
      Welcome, <span className="username">{currentUser.username}</span>
    </h2>

    <button className="add-photo icon-button"><i className="fa fa-camera-retro" aria-hidden="true"></i></button>

    <button className="header-button session-button" onClick={logout}>
      Log Out
    </button>
  </hgroup>
);

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">Login</Link>
    &nbsp;
    or
    &nbsp;
    <Link to="/signup" activeClassName="current">Sign up</Link>

  </nav>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
