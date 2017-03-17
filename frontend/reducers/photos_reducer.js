import { RECEIVE_STREAM_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO } from '../actions/photo_actions';
import merge from 'lodash/merge'

const PhotosReducer = (oldState = {photo: {
                          url: "",
                          caption: "",
                          user_id: this.props.currentUser
                        }
  }, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_STREAM_PHOTOS:
      return merge({}, action.photos);
    case RECEIVE_PHOTO:
      return merge({}, oldState, {
        [action.photo.id]: action.photo
      });
    case REMOVE_PHOTO:
      let newState = merge({}, oldState);
      delete(newState[action.id]);
      return newState;
    default:
      return oldState;
  }
};

export default PhotosReducer;
