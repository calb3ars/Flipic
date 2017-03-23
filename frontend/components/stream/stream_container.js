import { connect } from 'react-redux';
import Stream from './stream';
import { fetchStreamPhotos } from '../../actions/photo_actions';
import { createLike, deleteLike } from '../../actions/like_actions';

const mapStateToProps = ({ session, stream }) => ({
  user: session.currentUser,
  photos: stream.photos,
  selectedPhoto: stream.selectedPhoto
});

const mapDispatchToProps = (dispatch) => ({
  fetchStreamPhotos: () => dispatch(fetchStreamPhotos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Stream);
