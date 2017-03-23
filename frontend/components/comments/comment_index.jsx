import React from 'react';
import CommentIndexItem from '../comments/comment_index_item';

class CommentIndex extends React.Component {
  render() {
    return (
      <ul className="comment-index">
        {
          this.props.photo.comments.map( (comment, idx) => (
            <CommentIndexItem key={idx} comment={comment} />
          ))
        }
      </ul>
    );
  }
}

export default CommentIndex;
