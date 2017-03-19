import React from 'react';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form/session_form_container';
import UserProfileContainer from './users/user_profile_container';
//react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';



const redirectIfLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if (currentUser) {
    replace('/');
  }
}
const redirectIfLoggedOut = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  console.log(currentUser);
  if (!currentUser) {
    replace('/signup');
  }
}

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <Route path="/login" component={ SessionFormContainer } onEnter={ redirectIfLoggedIn} />
        <Route path="/signup" component={ SessionFormContainer } onEnter={ redirectIfLoggedIn} />
        <Route path="users/:userId" component={ UserProfileContainer } onEnter={redirectIfLoggedOut}/>
      </Route>
    </Router>
  </Provider>
)


export default Root;
