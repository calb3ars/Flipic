import { connect } from 'react-redux';
import Stream from './stream';
import { fetchStreamPhotos } from '../../actions/photo_actions';

const mapStateToProps = ({ session, photos }) => ({
  user: session.currentUser,
  photos
});

const mapDispatchToProps = (dispatch) => ({
  fetchStreamPhotos: () => dispatch(fetchStreamPhotos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Stream);
