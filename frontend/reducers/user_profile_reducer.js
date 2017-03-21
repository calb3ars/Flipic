import { RECEIVE_USER, RECEIVE_USER_PHOTOS } from '../actions/user_actions';
import { RECEIVE_FOLLOWER, REMOVE_FOLLOWER } from '../actions/follow_actions';
import merge from 'lodash/merge';

const defaultUser = {
  username:'',
  tagline:'',
  followerCount: 0,
  followingCount: 0,
  profile_image:'',
  photos: [],
  followToggle: false
};

const UserProfileReducer = (oldState = defaultUser, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, action.user);
    case RECEIVE_FOLLOWER:
      return Object.assign({}, oldState, {
        followToggle: false
      });
    case REMOVE_FOLLOWER:
      return Object.assign({}, oldState, {
        followToggle: false
      });
    default:
      return oldState;
  }
};

export default UserProfileReducer;
