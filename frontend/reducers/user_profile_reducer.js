import { RECEIVE_USER, RECEIVE_USER_PHOTOS, RECEIVE_USER_PHOTO, } from '../actions/user_actions';
import { RECEIVE_FOLLOWER, REMOVE_FOLLOWER, RECEIVE_FOLLOW, RECEIVE_FOLLOW_ID } from '../actions/follow_actions';
import { RECEIVE_USER_LIKE, REMOVE_USER_LIKE } from '../actions/like_actions';
import { RECEIVE_USER_COMMENT, REMOVE_USER_COMMENT } from '../actions/comment_actions';

import merge from 'lodash/merge';

const defaultUser = {
  username:'',
  tagline:'',
  followerCount: 0,
  followingCount: 0,
  profile_image:'',
  photos: [],
  followToggle: false,
  presentingPhoto: {
    user: {},
    comments: []
  }
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
      return merge({}, oldState, action.user);
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

    case RECEIVE_USER_PHOTO:
      console.log(action.photo)
      return merge({}, oldState, { presentingPhoto: action.photo});

    case RECEIVE_USER_LIKE:
      const newLikeState = merge({}, oldState)
        newLikeState.presentingPhoto.likeToggle = true;
        newLikeState.presentingPhoto.likes_count += 1;
    case REMOVE_USER_LIKE:
      const removedLikeState = merge({}, oldState)
        removedLikeState.presentingPhoto.likeToggle = false;
        removedLikeState.presentingPhoto.likes_count -= 1;
    case RECEIVE_USER_COMMENT:
      const newCommentState = merge({}, oldState)
      newCommentState.presentingPhoto.comments.concat([action.comment])
      return newCommentState;
    case REMOVE_USER_COMMENT:
      const removedCommentState = merge({}, oldState)
      newComments = removedCommentState.presentingPhoto.comments.filter(comment =>
        comment.id !== action.comment.id
      );
      removedCommentState.presentingPhoto.comments = newComments;
      return removedCommentState;
    default:
      return oldState;
  }
};

export default UserProfileReducer;


// case RECEIVE_LIKE:
//   let newLikePhotos = oldState.photos.slice();
//   if (newLikePhotos.length === 0) {
//     return oldState;
//   }
//   let likedPhotoIndex = findObjectIndex(newLikePhotos, "id", action.like.photo_id);
//   let likedPhoto = newLikePhotos[likedPhotoIndex];
//   likedPhoto.likeToggle = true;
//   likedPhoto.likes_count = likedPhoto.likes_count += 1;
//   return Object.assign({}, oldState, {
//     photos: newLikePhotos
//   });
//
// case REMOVE_LIKE:
//
//   let removedLikePhotos = oldState.photos.slice();
//   if (removedLikePhotos.length === 0) {
//     return oldState;
//   }
//   let unlikedPhotoIndex = findObjectIndex(removedLikePhotos, "id", action.like.photo_id);
//   let unLikedPhoto = removedLikePhotos[unlikedPhotoIndex];
//   unLikedPhoto.likeToggle = false;
//   unLikedPhoto.likes_count = unLikedPhoto.likes_count -= 1;
//   return Object.assign({}, oldState, {
//     photos: removedLikePhotos
//   });
//
// case RECEIVE_COMMENT:
//
//   let newCommentPhotos = oldState.photos.slice();
//   if (newCommentPhotos.length === 0) {
//     return oldState;
//   }
//   let commentedPhotoIndex = findObjectIndex(newCommentPhotos, "id", action.comment.photo_id);
//   let commentedPhoto = newCommentPhotos[commentedPhotoIndex];
//   commentedPhoto.comments.push(action.comment);
//
//   return Object.assign({}, oldState, {
//     photos: newCommentPhotos,
//     selectedPhoto: commentedPhoto
//   });
//
// case REMOVE_COMMENT:
//   let deletedCommentPhotos = oldState.photos.slice();
//
//   if (deletedCommentPhotos.length === 0) {
//     return oldState;
//   }
//   let deletedCommentPhotoIndex = findObjectIndex(deletedCommentPhotos, "id", action.comment.photo_id);
//   let deletedCommentPhoto = deletedCommentPhotos[deletedCommentPhotoIndex];
//   let deletedComment = findObjectIndex(deletedCommentPhoto.comments, "id", action.comment.id);
//     deletedCommentPhoto.comments.splice(deletedComment, 1);
//   return Object.assign({}, oldState, {
//     photos: deletedCommentPhotos
//   });
