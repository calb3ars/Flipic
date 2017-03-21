import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions';
import { createFollow, deleteFollow, fetchFollow } from '../../actions/follow_actions';


const mapStateToProps = ({ profile, session }) => ({
  profile,
  currentUser: session.currentUser,
  following: profile.followId
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  createFollow: leader_id => dispatch(createFollow(leader_id)),
  deleteFollow: leader_id => dispatch(deleteFollow(leader_id)),
  fetchFollow: leader_id => dispatch(fetchFollow(leader_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
