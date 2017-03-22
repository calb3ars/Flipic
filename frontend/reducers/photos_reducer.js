import { RECEIVE_STREAM_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO } from '../actions/photo_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { _, merge } from 'lodash/merge';

const excludePhoto = (photo, action) => {
  return photo !== action.photo;
};

const null_photos = {
  photos : [],
  selectedPhoto: null
};

const findPhotoIndex = (array, attr, value) => {
  for(let i = 0; i < array.length; i++) {
    if (array[i][attr] === value) {
      return i;
    }
  }
  return -1;
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
      let newStatePhotos = oldState.photos.slice();

      // let likedPhotoIndex = newStatePhotos.indexOf(action.like.photo_id);
      let likedPhotoIndex = findPhotoIndex(newStatePhotos, "id", action.like.photo_id);
      let likedPhoto = newStatePhotos[likedPhotoIndex];
      likedPhoto.likeToggle = true;
      debugger
      return Object.assign({}, oldState, {
        photos: newStatePhotos
      });

    case REMOVE_LIKE:
      let statePhotos = oldState.photos.slice();
      let unlikedPhotoIndex = findPhotoIndex(newStatePhotos, "id", action.like.photo_id);
      let unLikedPhoto = statePhotos[unlikedPhotoIndex];
      unLikedPhoto.likeToggle = false;
      debugger
      return Object.assign({}, oldState, {
        photos: statePhotos
      });

    default:
      return oldState;
  }
};

export default PhotosReducer;
