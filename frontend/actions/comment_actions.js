import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const REMOVE_PHOTO_COMMENT = "REMOVE_PHOTO_COMMENT";
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

export const createComment = comment => dispatch => (
  CommentAPIUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = commentId => dispatch => {
  
  return CommentAPIUtil.deleteComment(commentId)
    .then(comment => dispatch(removeComment(comment)))
      .then(comment => dispatch(removePhotoComment(comment)))

};
