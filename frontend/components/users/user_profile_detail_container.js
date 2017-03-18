import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import UserProfileDetail from './user_profile_detail';

const mapStateToProps = ({ session }, ownProps) => ({
  currentUser: session.currentUser,
  user: ownProps.params.userId
});

const mapDispatchToProps = (ownProps, dispatch) => ({
  fetchUser: id => dispatch(fetchUser(id)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileDetail);
