import React from 'react';
import CommentIndexItemContainer from '../comments/comment_index_item_container';
import _ from 'lodash';

class CommentIndex extends React.Component {

  render() {
    return (
      <ul className="comment-index">
        {
          this.props.photo.comments.map( (comment, idx) => (
            <CommentIndexItemContainer key={idx} comment={comment} />
          ))
        }
      </ul>
    );
  }
}

export default CommentIndex;
