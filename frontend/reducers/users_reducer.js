import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const UsersReducer = (oldState = {}, action) => {
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, oldState, {
        [action.user.id]: action.user
      });
    default:
      return oldState;
  }
};

export default UsersReducer;
