import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_USER_PHOTOS } from '../actions/photo_actions';
import merge from 'lodash/merge';

const _nullProfile = {
  user: null,
  photos: []
};

const UsersReducer = (oldState = _nullProfile, action) => {
  switch(action.type) {
    case RECEIVE_USER:
      return Object.assign({}, oldState, {
        user: action.user
      });
    case RECEIVE_USER_PHOTOS:
      return Object.assign({}, oldState, {
        photos: action.photos
      });
    default:
      return oldState;
  }
};

export default UsersReducer;
