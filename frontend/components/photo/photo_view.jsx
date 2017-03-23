import React from 'react';
import Modal from 'react-modal';

import UserAvatar from '../photo/user_avatar';
import Timestamp from '../photo/timestamp';
import Caption from '../photo/caption';
import Likes from '../photo/likes';
import CommentIndex from '../comments/comment_index';
import LikeButtonContainer from '../likes/like_button_container';
import CommentFormContainer from '../comments/comment_form_container';

class PhotoView extends React.Component {
  render() {
    const photo = this.props.photo;

    <li  className="view-photo-container photo-container">
      <ul className="photo-content">

        <li className="">
          <img className="view-photo photo-image" src={`${photo.url}`} />
        </li>
        <li>
          <li className="user-avatar-container">
            <div className="photo-header">
              <UserAvatar photo={photo} />
              <Timestamp photo={photo}/>
            </div>
          </li>



          <li className="photo-info">
            <ul>

              <Caption photo={photo} />

              <Likes photo={photo} />

            <li  className="comment-container">
              <CommentIndex
                className=""
                photo={photo} />
            </li>

            </ul>
          </li>

          <div className="comment-like-form">
            <LikeButtonContainer photo={photo} />
            <CommentFormContainer photo={photo} />
          </div>
        </li>
      </ul>
    </li>
  }
}

export default PhotoView;
