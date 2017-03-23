import { connect } from 'react-redux';
import LikeButton from './like_button';
import { createLike, deleteLike } from '../../actions/like_actions';

const mapDispatchToProps = (dispatch) => ({
  createLike: (photoId) => dispatch(createLike(photoId)),
  deleteLike: (photoId) => dispatch(deleteLike(photoId))
});

export default connect(mapDispatchToProps)(LikeButton);
