import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions';
import { fetchUserPhoto } from '../../actions/photo_actions';
import { createFollow, deleteFollow, fetchFollow } from '../../actions/follow_actions';


const mapStateToProps = ({ profile, session, stream }) => ({
  profile,
  currentUser: session.currentUser,
  photo: stream.viewPhoto
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchUserPhoto: photoId => dispatch(fetchUserPhoto(photoId)),
  createFollow: leader_id => dispatch(createFollow(leader_id)),
  deleteFollow: leader_id => dispatch(deleteFollow(leader_id)),
  fetchFollow: leader_id => dispatch(fetchFollow(leader_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
