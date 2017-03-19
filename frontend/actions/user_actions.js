import * as UserAPIUtil from '../util/user_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = (username) => dispatch => {
  return UserAPIUtil.fetchUser(username)
    .then(user => dispatch(receiveUser(user)));
};
