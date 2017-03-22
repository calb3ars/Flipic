import { RECEIVE_STREAM_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO } from '../actions/photo_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';

const excludePhoto = (photo, action) => {
  return photo !== action.photo;
};

const null_photos = {
  photos : [],
  selectedPhoto: null
};

const PhotosReducer = (oldState = null_photos, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_STREAM_PHOTOS:
      return Object.assign({}, oldState, { photos: [...action.photos]});

    case RECEIVE_PHOTO:
      return Object.merge({}, oldState, { photos: [action.photo]});

    case REMOVE_PHOTO:
      let newState = [...oldState];
      newState.filter(excludePhoto, action);
      return { photos: newState};

    case RECEIVE_LIKE:
      let newStatePhotos = oldState.images.slice();
      let likedPhotoIndex = newStatePhotos.indexOf(action.like.photoId);
      let likedPhoto = newStatePhotos[likedPhotoIndex];
      likedPhoto.likes.push(action.like.userId);
      return Object.assign({}, oldState, {
        photos: newStatePhotos
      });

    case REMOVE_LIKE:
      let statePhotos = oldState.images.slice();
      let unlikedPhotoIndex = statePhotos.indexOf(action.like.photoId);
      let removedLikeIndex = statePhotos[unlikedPhotoIndex].likes.indexOf(action.like.userId);
      statePhotos[unlikedPhotoIndex].likes.splice(removedLikeIndex, 1);
      return Object.assign({}, oldState, {
        photos: statePhotos
      });

    default:
      return oldState;
  }
};

export default PhotosReducer;
