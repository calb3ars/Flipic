import { RECEIVE_STREAM_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO } from '../actions/photo_actions';
import merge from 'lodash/merge';

const excludePhoto = (photo, action) => {
  return photo !== action.photo;
};

const PhotosReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_STREAM_PHOTOS:
      return [...action.photos];
    case RECEIVE_PHOTO:
      return [action.photo,...oldState];
    case REMOVE_PHOTO:
      let newState = [...oldState];
      newState.filter(excludePhoto, action);
      return newState;
    default:
      return oldState;
  }
};

export default PhotosReducer;
