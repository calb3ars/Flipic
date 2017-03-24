import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { deleteComment, deletePhotoComment } from '../../actions/comment_actions';

const mapStateToProps = (ownProps) => ({
  photo: ownProps.photo

});

const mapDispatchToProps = dispatch => ({
  deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default connect(null, mapDispatchToProps)(CommentIndex);
