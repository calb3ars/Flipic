import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import {logout } from '../../actions/session_actions';
import { fetchUserPhotos, createPhoto } from '../../actions/photo_actions';
import { selectAllPhotos } from '../../reducers/selectors';

import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  user: state.user.user,
  photos: selectAllPhotos(state.user.photos)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUser: username => dispatch(fetchUser(username)),
  fetchUserPhotos: username => dispatch(fetchUserPhotos(username)),
  createPhoto: photo => dispatch(createPhoto(photo)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
