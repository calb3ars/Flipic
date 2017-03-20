import React from 'react';
import { Link } from 'react-router';
import PhotoFormContainer from '../photo_form/photo_form_container';

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">

    <h2 className="flipic-text nav-flipic-text">Flipic</h2>

    <PhotoFormContainer />

    <button className="header-button session-button logout-button" onClick={logout}>
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
