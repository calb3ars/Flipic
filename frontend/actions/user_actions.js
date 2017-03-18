import * as UserAPIUtil from '../util/user_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_IMAGES = "RECEIVE_USER_IMAGES";
export const RECEIVE_IMAGE = "RECEIVE_IMAGE";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = (username) => dispatch => (
  UserAPIUtil.fetchUser(username)
    .then(user => dispatch(receiveUser(user)))
    .then((user) => hashHistory.push(`${user.id}`))
);
