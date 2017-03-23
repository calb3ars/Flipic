import React from 'react';
import { Link } from 'react-router';

class CommentIndexItem extends React.Component {
  render() {
    const comment = this.props.comment;
    const photo = this.props.photo;
    return (
      <ul className="comment" key={comment.id}>
        <li className="comment-username">
          <Link to={`/users/${comment.author.id}`}>
            <span className="photo-info-bold">
              {comment.author.username}
            </span>&nbsp;
          </Link>
        </li>
        <li className="comment-body">{comment.body}</li>
      </ul>
    );
  }
}

export default CommentIndexItem;
