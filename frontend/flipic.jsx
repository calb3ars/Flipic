import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import * as SessionAPIUtil from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import {clearErrors} from './actions/session_actions';


import { fetchStreamPhotos, fetchPhoto, createPhoto, updatePhoto, removePhoto } from './actions/photo_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root')
  Modal.setAppElement(document.body);

  window.updatePhoto = updatePhoto;

  window.store = store;
  ReactDOM.render(<Root store={ store } />, root);
});
