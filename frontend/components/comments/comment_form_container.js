import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment, createUserComment } from '../../actions/comment_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  createUserComment: comment => dispatch(createUserComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
