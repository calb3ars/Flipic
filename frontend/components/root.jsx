import React from 'react';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form/session_form_container';
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
  if (!currentUser) {
    replace('/signup');
  }
}

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" >
        <IndexRoute component={ App } onEnter={redirectIfLoggedOut}/>
        <Route path="/login" component={ SessionFormContainer } onEnter={ redirectIfLoggedIn} />
        <Route path="/signup" component={ SessionFormContainer } onEnter={ redirectIfLoggedIn} />
      </Route>
    </Router>
  </Provider>
)


export default Root;
