import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser, fetchUserPhotos} from'../../actions/user_actions';
import _ from 'lodash';


const mapStateToProps = ({ profile }) => ({
  profile
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchUserPhotos: id=> dispatch(fetchUserPhotos(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
