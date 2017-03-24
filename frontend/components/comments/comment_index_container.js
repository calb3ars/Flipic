import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { deleteComment } from '../../actions/comment_actions';

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
