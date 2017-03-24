import * as UserAPIUtil from '../util/user_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_PHOTO = "RECEIVE_USER_PHOTO";

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const receiveUserPhoto = photo => {
  return {
    type: RECEIVE_USER_PHOTO,
    photo
  }
}

export const fetchUser = (id) => dispatch => {
  return UserAPIUtil.fetchUser(id)
    .then(user => dispatch(receiveUser(user)));
};

export const fetchUserPhoto = (id) => dispatch => {
  return UserAPIUtil.fetchUserPhoto(id)
    .then(photo => dispatch(receiveUserPhoto(photo)));
};
