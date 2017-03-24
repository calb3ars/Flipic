import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_USER_LIKE = "RECEIVE_USER_LIKE";
export const REMOVE_USER_LIKE = "REMOVE_USER_LIKE";

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});

export const receiveUserLike = like => ({
  type: RECEIVE_USER_LIKE,
  like
});

export const removeUserLike = like => ({
  type: REMOVE_USER_LIKE,
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

export const createUserLike = photoId => dispatch => {
  return LikeAPIUtil.createLike(photoId)
    .then(like => dispatch(receiveUserLike(like)));
};

export const deleteUserLike = photoId => dispatch => {
  return LikeAPIUtil.deleteLike(photoId)
    .then(like => dispatch(removeUserLike(like)));
};
