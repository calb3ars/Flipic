import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPIUtil from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    console.log(preloadedState);
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root')
  window.store = store;
  ReactDOM.render(<Root store={ store } />, root);
});
