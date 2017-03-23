import React from 'react';
import LikeButtonContainer from '../likes/like_button_container';
import CommentFormContainer from '../comments/comment_form_container';

class CommentIndex extends React.Component {
  render() {
    return (
      <div>
        <li className="comment-like-form">
          <LikeButtonContainer photo={this.props.photo} />
          <CommentFormContainer photo={this.props.photo} />
          <button className="profile-ellipsis-stream icon-button ellipsis">o&nbsp;&nbsp;o&nbsp;&nbsp;o</button>
        </li>
      </div>
    );
  }
}

export default CommentIndex;
