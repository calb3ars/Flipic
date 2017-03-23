import React from 'react';
import CommentIndexItem from './comment_index_item';
import CommentIndexFormContainer from './comment_index_form_container';

class CommentIndex extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.photo.comments.map( comment => (
              <CommentIndexItem
                key={comment.id}
                deleteComment={this.props.deleteComment(comment.id)}
                comment={comment}
              />
            ))
          }
        </ul>

        <CommentFormContainer photo={this.props.photo} />
      </div>
    )
  }
}
