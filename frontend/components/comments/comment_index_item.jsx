import React from 'react';
import { Link } from 'react-router';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.state.key !== newProps.key) {
      this.setState({
        key: newProps.key
      });
    }
  }

  handleDelete(id) {
    return () => this.props.deleteComment(id);
  }

  render() {
    const comment = this.props.comment;
    const photo = this.props.photo;

    return (
      <ul className="comment" key={comment.id}>
        <li className="comment-username-body">
          <div className="comment-username">
            <Link to={`/users/${comment.author.id}`}>
              <span className="photo-info-bold">
                {comment.author.username}
              </span>&nbsp;
            </Link>
          </div>
          <div className="comment-body">{comment.body}</div>
        </li>

        {
          this.props.currentUser &&
          (this.props.currentUser.id === comment.author.id) ? (
            <button className="comment-delete" onClick={this.handleDelete(comment.id)}>X</button>
          ) : (
            <div className="comment-delete"></div>
          )
        }
      </ul>
    );
  }
}

export default CommentIndexItem;
