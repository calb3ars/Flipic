import { RECEIVE_USER, RECEIVE_USER_PHOTOS } from '../actions/user_actions';
import { RECEIVE_FOLLOWER, REMOVE_FOLLOWER, RECEIVE_FOLLOW, RECEIVE_FOLLOW_ID } from '../actions/follow_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';

import merge from 'lodash/merge';

const defaultUser = {
  username:'',
  tagline:'',
  followerCount: 0,
  followingCount: 0,
  profile_image:'',
  photos: [],
  followToggle: false
};

const findObjectIndex = (array, attr, value) => {
  for(let i = 0; i < array.length; i++) {
    if (array[i][attr] === value) {
      return i;
    }
  }
  return -1;
};

const UserProfileReducer = (oldState = defaultUser, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, action.user);
    case RECEIVE_FOLLOWER:
      return Object.assign({}, oldState, {
        followToggle: true
        // remove followId from actions, util and db
      });
    case REMOVE_FOLLOWER:
      return Object.assign({}, oldState, {
        followToggle: false
      });
    case RECEIVE_FOLLOW_ID:
      return Object.assign({}, oldState, {
        followId: action.followId
      });

    case RECEIVE_LIKE:
      let newLikePhotos = oldState.photos.slice();
      if (newLikePhotos.length === 0) {
        return oldState;
      }
      let likedPhotoIndex = findObjectIndex(newLikePhotos, "id", action.like.photo_id);
      let likedPhoto = newLikePhotos[likedPhotoIndex];
      likedPhoto.likeToggle = true;
      likedPhoto.likes_count = likedPhoto.likes_count += 1;
      return Object.assign({}, oldState, {
        photos: newLikePhotos
      });

    case REMOVE_LIKE:

      let removedLikePhotos = oldState.photos.slice();
      if (removedLikePhotos.length === 0) {
        return oldState;
      }
      let unlikedPhotoIndex = findObjectIndex(removedLikePhotos, "id", action.like.photo_id);
      let unLikedPhoto = removedLikePhotos[unlikedPhotoIndex];
      unLikedPhoto.likeToggle = false;
      unLikedPhoto.likes_count = unLikedPhoto.likes_count -= 1;
      return Object.assign({}, oldState, {
        photos: removedLikePhotos
      });

    case RECEIVE_COMMENT:

      let newCommentPhotos = oldState.photos.slice();
      if (newCommentPhotos.length === 0) {
        return oldState;
      }
      let commentedPhotoIndex = findObjectIndex(newCommentPhotos, "id", action.comment.photo_id);
      let commentedPhoto = newCommentPhotos[commentedPhotoIndex];
      commentedPhoto.comments.push(action.comment);

      return Object.assign({}, oldState, {
        photos: newCommentPhotos,
        selectedPhoto: commentedPhoto
      });

    case REMOVE_COMMENT:
      let deletedCommentPhotos = oldState.photos.slice();
      if (deletedCommentPhotos.length === 0) {
        return oldState;
      }
      let deletedCommentPhotoIndex = findObjectIndex(deletedCommentPhotos, "id", action.comment.photo_id);
      let deletedCommentPhoto = deletedCommentPhotos[deletedCommentPhotoIndex];
      let deletedComment = findObjectIndex(deletedCommentPhoto.comments, "id", action.comment.id);
        deletedCommentPhoto.comments.splice(deletedComment, 1);
      return Object.assign({}, oldState, {
        photos: deletedCommentPhotos
      });

    default:
      return oldState;
  }
};

export default UserProfileReducer;
