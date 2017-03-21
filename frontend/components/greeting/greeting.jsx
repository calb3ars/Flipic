import React from 'react';
import { Link } from 'react-router';
import PhotoFormContainer from '../photo_form/photo_form_container';

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">

    <h2 className="flipic-text nav-flipic-text"><Link to="/">Flipic</Link></h2>

    <PhotoFormContainer />

    <div to="" className="header-icon-container">
      <img className="header-icon icon" src="http://res.cloudinary.com/calb3ars/image/upload/v1490072576/compass_rtf9rr.svg" alt="discover"/>
      <img className="header-icon icon" src="http://res.cloudinary.com/calb3ars/image/upload/v1490072576/heart_bvqek2.svg" alt="following"/>
      <Link to={`users/${currentUser.id}`}>
        <img className="header-icon icon" src="http://res.cloudinary.com/calb3ars/image/upload/v1490072576/user_lvb0uf.svg" alt="account"/>
      </Link>
      <button className="header-button" onClick={logout}>
        Log Out
      </button>
    </div>
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
