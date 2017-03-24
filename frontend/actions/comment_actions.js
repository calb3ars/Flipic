import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_USER_COMMENT = "RECEIVE_USER_COMMENT";
export const REMOVE_USER_COMMENT = "REMOVE_USER_COMMENT";

export const RECEIVE_COMMENT_ID = "RECEIVE_COMMENT_ID";


export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment
});

export const removePhotoComment = (comment) => ({
  type: REMOVE_PHOTO_COMMENT,
  comment
});

export const receiveUserComment = (comment) => ({
  type: RECEIVE_USER_COMMENT,
  comment
})

export const removeUserComment = (comment) => ({
  type: REMOVE_USER_COMMENT,
  comment
})

export const createComment = comment => dispatch => (
  CommentAPIUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
);

export const createUserComment = comment => dispatch => (
  CommentAPIUtil.createComment(comment)
    .then(comment => dispatch(receiveUserComment)))
;

export const deleteComment = commentId => dispatch => {
  return CommentAPIUtil.deleteComment(commentId)
    .then(comment => dispatch(removeComment(comment)))
};

export const deleteUserComment = commentId => dispatch => {
  return CommentAPIUtil.deleteComment(commentId)
    .then(comment => dispatch(removeUserComment(comment)))
};
