import * as UserAPIUtil from '../util/user_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_PHOTOS = "RECEIVE_USER_PHOTOS";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveUserPhotos = photos => ({
  type: RECEIVE_USER_PHOTOS,
  photos
});

export const fetchUser = (id) => dispatch => {
  return UserAPIUtil.fetchUser(id)
    .then(user => dispatch(receiveUser(user)));
};

export const fetchUserPhotos = (id) => dispatch => {
  return UserAPIUtil.fetchUserPhotos(id)
    .then(photos => dispatch(receiveUser(photos)));
};
