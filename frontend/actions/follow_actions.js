import * as FollowAPIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOWER = "RECEIVE_FOLLOWER";
export const REMOVE_FOLLOWER = "REMOVE_FOLLOWER";
export const RECEIVE_FOLLOWER_ID = "RECEIVE_FOLLOWER_ID";
export const RECEIVE_FOLLOWING_ID = "RECEIVE_FOLLOWING_ID";
export const REMOVE_FOLLOWER_ID = "REMOVE_FOLLOWER_ID";
export const REMOVE_FOLLOWING_ID = "REMOVE_FOLLOWING_ID";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const RECEIVE_FOLLOW_ID = "RECEIVE_FOLLOW_ID";


export const receiveFollower = (follower) => ({
  type: RECEIVE_FOLLOWER,
  follower
});

export const removeFollower = (follower) => ({
  type: REMOVE_FOLLOWER,
  follower
});

export const receiveFollow = (follow) => ({
  type: RECEIVE_FOLLOW,
  follow
});

export const receiveFollowId = (id) => ({
  type: RECEIVE_FOLLOW_ID,
  id
});

export const createFollow = following_id => dispatch => (
  FollowAPIUtil.createFollow(following_id)
    .then(follow => dispatch(receiveFollow(follow)))
);

export const deleteFollow = id => dispatch => (
  FollowAPIUtil.deleteFollow(id)
    .then(id => dispatch(removeFollow(id)))
);

export const fetchFollow = following_id => dispatch => (
  FollowAPIUtil.fetchFollow(following_id)
    .then(id => dispatch(receiveFollow(id)))
);
