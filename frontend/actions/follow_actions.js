import * as FollowAPIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const receiveFollow = (follow) => ({
  type: RECEIVE_FOLLOW,
  follow
});

export const removeFollow = (id) => ({
  type: REMOVE_FOLLOW,
  id
});

export const createFollow = follow => dispatch => (
  FollowAPIUtil.createFollow(follow)
    .then(follow => dispatch(receiveFollow(follow)))
);

export const deleteFollow = id => dispatch => (
  FollowAPIUtil.deleteFollow(id)
    .then(id => dispatch(removeFollow(id)))
);
