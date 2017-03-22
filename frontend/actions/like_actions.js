import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_PHOTO_LIKE = "RECEIVE_PHOTO_LIKE";
export const REMOVE_PHOTO_LIKE = "REMOVE_PHOTO_LIKE";

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});

export const receivePhotoLike = like => ({
  type: RECEIVE_PHOTO_LIKE,
  like
});

export const removePhotoLike = like => ({
  type: REMOVE_PHOTO_LIKE,
  like
});

export const createLike = photoId => dispatch => {
  return LikeAPIUtil.createLike(photoId)
    .then(like => dispatch(receiveLike(like)));
};

export const deleteLike = photoId => dispatch => {
  return LikeAPIUtil.deleteLike(photoId)
    .then(like => dispatch(removeLike(like)));
};

export const createPhotoLike = photoId => dispatch => {
  return LikeAPIUtil.createPhotoLike(photoId)
    .then(like => dispatch(receivePhotoLike(like)));
};

export const deletePhotoLike = photoId => dispatch => {
  return LikeAPIUtil.deletePhotoLike(photoId)
    .then(like => dispatch(removePhotoLike(like)));
};
