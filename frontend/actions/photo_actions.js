import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_STREAM_PHOTOS = "RECEIVE_STREAM_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO"

export const receivePhotos = (photos) => ({
  type: RECEIVE_PHOTOS,
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
    .then(photos => dispatch(receivePhotos(photos)))
);

export const fetchUserPhotos = () => dispatch => (
  PhotoAPIUtil.fetchUserPhotos()
    .then(photos => dispatch(receivePhotos(photos)))
);

export const fetchPhoto = (id) => dispatch => {
  return (
    PhotoAPIUtil.fetchPhoto(id)
      .then(photo => {
        return dispatch(receivePhoto(photo));
      })
  );
};

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
