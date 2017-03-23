import { RECEIVE_USER, RECEIVE_USER_PHOTOS, RECEIVE_USER_PHOTO } from '../actions/user_actions';
import { RECEIVE_FOLLOWER, REMOVE_FOLLOWER, RECEIVE_FOLLOW, RECEIVE_FOLLOW_ID } from '../actions/follow_actions';
import merge from 'lodash/merge';

const defaultUser = {
  username:'',
  tagline:'',
  followerCount: 0,
  followingCount: 0,
  profile_image:'',
  photos: [],
  followToggle: false,
  selectedProfilePhoto: []
};

const UserProfileReducer = (oldState = defaultUser, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, action.user);
    case RECEIVE_USER_PHOTO:
      return Object.merge({}, oldState, { selectedProfilePhoto: [action.photo]});
    case RECEIVE_FOLLOWER:
      return Object.assign({}, oldState, {
        followToggle: Boolean(action.followId)
      });
    case REMOVE_FOLLOWER:
      return Object.assign({}, oldState, {
        followToggle: false
      });
    case RECEIVE_FOLLOW_ID:
      return Object.assign({}, oldState, {
        followId: action.followId
      });
    default:
      return oldState;
  }
};

export default UserProfileReducer;
