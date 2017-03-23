import React from 'react';
import { Link, hashHistory } from 'react-router';

class CommentIndexItem extends React.Comment {
  render() {
    const comment = this.props.comment;
    return (
      <ul className="comment">
        <li className="comment-username">
          <Link to={`/users/${comment.author.username}`}>
            <span className="photo-info-bold">{comment.author.username}</span>
          </Link>
        </li>

        <li className="comment-body">{comment.body}</li>
      </ul>
    )
  }
}

export default CommentIndexItem;
