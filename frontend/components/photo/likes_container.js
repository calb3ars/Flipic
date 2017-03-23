import { connect } from 'react-redux';
import Likes from './likes';
import { createLike, deleteLike } from '../../actions/like_actions';

const mapStateToProps = ({stream}) => ({
  photo: stream.viewPhoto
});

const mapDispatchToProps = (dispatch) => ({
  createLike: photoId => dispatch(createLike(photoId)),
  deleteLike: photoId => dispatch(deleteLike(photoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
