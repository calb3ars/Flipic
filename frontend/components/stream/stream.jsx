import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import  CommentFormContainer from '../comments/comment_form_container';
import CommentIndex from '../comments/comment_index';
import UserAvatar from '../photo/user_avatar';
import Timestamp from '../photo/timestamp';
import LikeButtonContainer from '../likes/like_button_container';
import Caption from '../photo/caption';
import Likes from '../photo/likes';


class Stream extends React.Component {
  componentDidMount() {
    this.props.fetchStreamPhotos();
  }

  render() {

    return (
      <div className="stream-container">
        <ul className="stream">
          { this.props.photos.map( photo => (
            <li  key={photo.id} className="photo-container">
              <ul className="photo-content">

                <li className="user-avatar-container">
                  <div className="photo-header">
                    <UserAvatar photo={photo} />
                    <Timestamp photo={photo}/>
                  </div>
                </li>

                <li key={photo.id}>
                  <img className="stream-photo photo-image" src={`${photo.url}`} />
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

              </ul>
            </li>
          ))}
        </ul>
      </div>

    );
  }
}

export default Stream;
