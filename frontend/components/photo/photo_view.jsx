import React from 'react';
import Modal from 'react-modal';

import UserAvatar from '../photo/user_avatar';
import Timestamp from '../photo/timestamp';
import Caption from '../photo/caption';
import LikesContainer from '../photo/likes_container';
import CommentIndex from '../comments/comment_index';
import LikeButtonContainer from '../likes/like_button_container';
import CommentFormContainer from '../comments/comment_form_container';

class PhotoView extends React.Component {

  constructor(props) {
    super(props)

    this.cropPhoto = this.cropPhoto.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserPhoto(this.props.photo)
  }

  cropPhoto(photoUrl) {
    const photoCrop = "/upload/c_thumb,h_500,w_500/";
    const photoUrlSplit = photoUrl.split("/upload/");
    const croppedUrl = photoUrlSplit[0] + photoCrop + photoUrlSplit[1];
    console.log(croppedUrl);
    return croppedUrl;
  }

  render() {
    const photo = this.props.photo;
      return(
        <div  className="view-photo-container photo-container">
          <ul className="view-photo-content photo-content">

            <li className="view-photo-image-container photo-image-container">
              <img className="view-photo-image photo-image" src={this.cropPhoto(`${photo.url}`)} />
            </li>
            <li className="view-photo-detail">
              <div className="view-photo-user-avatar-container user-avatar-container">
                <div className="view-photo-photo-header photo-header">
                  <UserAvatar className="view-photo-user-avatar" photo={photo} />
                  <Timestamp className="view-photo-timestamp" photo={photo}/>
                </div>
              </div>

              <div className="view-photo-photo-info photo-info">
                <ul>
                  <Caption className="view-photo-caption" photo={photo} />
                  <LikesContainer className="view-photo-likes" photo={photo} />
                  <li className="view-photo-comment-container comment-container">
                    <CommentIndex
                      className="view-photo-comment-index"
                      photo={photo} />
                  </li>
                </ul>
              </div>

              <div className="view-photo-comment-like-form comment-like-form">
                <LikeButtonContainer className="view-photo-like-button-container" photo={photo} />
                <CommentFormContainer className="view-photo-comment-form-container" photo={photo} />
              </div>
            </li>
          </ul>
        </div>
      );
  }
}

export default PhotoView;
