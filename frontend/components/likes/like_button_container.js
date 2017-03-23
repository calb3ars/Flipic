import { connect } from 'react-redux';
import LikeButton from './like_button';
import { createLike, deleteLike } from '../../actions/like_actions';

const mapStateToProps = ({ session }) => ({
  user: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createLike: (photoId) => dispatch(createLike(photoId)),
  deleteLike: (photoId) => dispatch(deleteLike(photoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);
