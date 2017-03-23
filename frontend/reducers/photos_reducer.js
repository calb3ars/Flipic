import { RECEIVE_STREAM_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO } from '../actions/photo_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { merge } from 'lodash/merge';

const null_photos = {
  photos : [],
  selectedPhoto: null
};

// Find an object within an array using its id (from action)
const findObjectIndex = (array, attr, value) => {
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

    // might need to extract into its own piece of state
    case RECEIVE_PHOTO:
      return Object.merge({}, oldState, { selectedPhoto: [action.photo]});

    case REMOVE_PHOTO:
      let removedPhotoState = [...oldState];
      let removedPhoto = findObjectIndex(removedPhotoState, "id", action.photo.id);
      removedPhotoState.splice(removedPhoto, 1);
      return { photos: removedPhotoState};

    case RECEIVE_LIKE:
      let newLikePhotos = oldState.photos.slice();
      let likedPhotoIndex = findObjectIndex(newLikePhotos, "id", action.like.photo_id);
      let likedPhoto = newLikePhotos[likedPhotoIndex];
      likedPhoto.likeToggle = true;
      likedPhoto.likes_count = likedPhoto.likes_count += 1;
      return Object.assign({}, oldState, {
        photos: newLikePhotos
      });

    case REMOVE_LIKE:
      let removedLikePhotos = oldState.photos.slice();
      let unlikedPhotoIndex = findObjectIndex(removedLikePhotos, "id", action.like.photo_id);
      let unLikedPhoto = removedLikePhotos[unlikedPhotoIndex];
      unLikedPhoto.likeToggle = false;
      unLikedPhoto.likes_count = unLikedPhoto.likes_count -= 1;
      return Object.assign({}, oldState, {
        photos: removedLikePhotos
      });

    case RECEIVE_COMMENT:
      let newCommentPhotos = oldState.photos.slice();
      let commentedPhotoIndex = findObjectIndex(newCommentPhotos, "id", action.comment.photo_id);
      let commentedPhoto = newCommentPhotos[commentedPhotoIndex];
      commentedPhoto.comments.concat(action.comment);
      return Object.assign({}, oldState, {
        photos: newCommentPhotos
      });

    case REMOVE_COMMENT:
      let deletedCommentPhotos = oldState.photos.slice();
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

export default PhotosReducer;
