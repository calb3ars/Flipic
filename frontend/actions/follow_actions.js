import * as FollowAPIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOWER = "RECEIVE_FOLLOWER";
export const REMOVE_FOLLOWER = "REMOVE_FOLLOWER";
export const RECEIVE_FOLLOW_ID = "RECEIVE_FOLLOW_ID";

export const receiveFollower = (followId) => ({
  type: RECEIVE_FOLLOWER,
  followId
});

export const removeFollower = (followId) => ({
  type: REMOVE_FOLLOWER,
  followId
});

export const receiveFollowId = (followId) => ({
  type: RECEIVE_FOLLOW_ID,
  followId
});

export const createFollow = leader_id => dispatch => (
  FollowAPIUtil.createFollow(leader_id)
    .then(follower => dispatch(receiveFollower(follower)))
);

export const deleteFollow = leader_id => dispatch => (
  FollowAPIUtil.deleteFollow(leader_id)
    .then(followId => dispatch(removeFollower(followId)))
);

export const fetchFollow = leader_id => dispatch => (
  FollowAPIUtil.fetchFollow(leader_id)
    .then(follow_id => dispatch(receiveFollowId(follow_id)))
);
