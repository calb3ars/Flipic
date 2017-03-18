import {
  RECEIVE_CURRENT_USER,
  LOGOUT,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser
      return merge({}, oldState, {
        currentUser
      });
    case LOGOUT:
      return merge({}, oldState);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, oldState, {
        errors
      });
    case CLEAR_ERRORS:
      return merge({}, oldState, {errors: []});
    default:
      return oldState;
  }
};

export default SessionReducer;
