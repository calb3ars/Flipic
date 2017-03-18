import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_USER_PHOTOS, RECEIVE_PHOTO } from '../actions/photo_actions';
import merge from 'lodash/merge';

const _nullProfile = {
  user: null,
  photos: []
};

const UsersReducer = (oldState = _nullProfile, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, oldState, {
        user: action.user
      });
    case RECEIVE_USER_PHOTOS:
      return merge({}, oldState, {
        photos: action.photos
      });
    case RECEIVE_PHOTO:
      const photo = action.photo;
      const newPhotos = merge({}, oldState, {
        photo
      });
      return newPhotos;
    default:
      return oldState;
  }
};

export default UsersReducer;
