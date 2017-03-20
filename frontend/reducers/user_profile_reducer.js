import { RECEIVE_USER, RECEIVE_USER_PHOTOS } from '../actions/user_actions';
import merge from 'lodash/merge';

const defaultUser = {
  username:'',
  tagline:'',
  profile_image:'',
  photos: []
};

const UserProfileReducer = (oldState = defaultUser, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, action.user);
    default:
      return oldState;
  }
};

export default UserProfileReducer;
