import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import * as SessionAPIUtil from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import {clearErrors} from './actions/session_actions';

import { fetchStreamPhotos, fetchPhoto, createPhoto, updatePhoto, deletePhoto } from './actions/photo_actions';
import { createFollow, deleteFollow } from './actions/follow_actions';


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

  window.fetchPhoto = fetchPhoto;
  window.createPhoto = createPhoto;
  window.updatePhoto = updatePhoto;
  window.deletePhoto = deletePhoto;
  window.createFollow = createFollow;
  window.deleteFollow = deleteFollow;


  window.store = store;
  ReactDOM.render(<Root store={ store } />, root);
});
