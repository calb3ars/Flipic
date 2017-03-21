import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions';
import { createFollow, deleteFollow, receiveFollow, receiveFollowId } from '../../actions/follow_actions';


const mapStateToProps = ({ profile, session }) => ({
  profile,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  createFollow: followingId => dispatch(createFollow(followingId)),
  deleteFollow: followingId => dispatch(deleteFollow(followingId)),
  receiveFollow: id => dispatch(receiveFollow(id)),
  receiveFollowId: followingId => dispatch(receiveFollowId(followingId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
