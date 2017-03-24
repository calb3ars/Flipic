import { connect } from 'react-redux';
import CommentIndexItem from './comment_index_item';
import { deleteUserComment } from '../../actions/comment_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  deleteComment: commentId => dispatch(deleteUserComment(commentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndexItem);
