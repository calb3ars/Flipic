import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_STREAM_PHOTOS = "RECEIVE_STREAM_PHOTOS";
export const RECEIVE_USER_PHOTOS = "RECEIVE_USER_PHOTOS";
// export const RECEIVE_USER_PHOTO = "RECEIVE_USER_PHOTO";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";

export const receiveStreamPhotos = (photos) => ({
  type: RECEIVE_STREAM_PHOTOS,
  photos
});

export const receiveUserPhotos = (photos) => ({
  type: RECEIVE_USER_PHOTOS,
  photos
});
//
// export const receiveUserPhoto = (photo) => ({
//   type: RECEIVE_USER_PHOTO,
//   photo
// });

export const receivePhoto = (photo) => ({
  type: RECEIVE_PHOTO,
  photo
});

export const removePhoto = (photo) => ({
  type: REMOVE_PHOTO,
  photo
});

export const fetchStreamPhotos = () => dispatch => (
  PhotoAPIUtil.fetchStreamPhotos()
    .then(photos => dispatch(receiveStreamPhotos(photos)))
);

export const fetchUserPhotos = () => dispatch => (
  PhotoAPIUtil.fetchUserPhotos()
    .then(photos => dispatch(receiveUserPhotos(photos)))
);

export const fetchPhoto = (id) => dispatch => (
  PhotoAPIUtil.fetchPhoto(id)
    .then(photo => dispatch(receivePhoto(photo)))
);

// export const fetchUserPhoto = (id) => dispatch => (
//   PhotoAPIUtil.fetchPhoto(id)
//     .then(photo => dispatch(receiveUserPhoto(photo)))
// );

export const createPhoto = (photo) => dispatch => (
  PhotoAPIUtil.createPhoto(photo)
    .then(photo => dispatch(receivePhoto(photo)))
);

export const updatePhoto = (photo) => dispatch => (
  PhotoAPIUtil.updatePhoto(photo)
    .then(photo => dispatch(receivePhoto(photo)))
);

export const deletePhoto = (id) => dispatch => (
  PhotoAPIUtil
    .deletePhoto(id)
    .then((photo) => dispatch(removePhoto(photo)))
);
