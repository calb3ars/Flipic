import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_STREAM_PHOTOS = "RECEIVE_STREAM_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export REMOVE_PHOTO = "REMOVE_PHOTO"

export const receiveStreamPhotos = (photos) => ({
  type: RECEIVE_STREAM_PHOTOS,
  photos
});

export const receivePhoto = (photo) => ({
  type: RECEIVE_PHOTO,
  photo
});

export const removePhoto = (id) => ({
  type: REMOVE_PHOTO,
  id
});

export const fetchStreamPhotos = () => dispatch => (
  PhotoAPIUtil.fetchStreamPhotos()
    .then(photos => dispatch(receiveStreamPhotos(photos)))
);
