import React from 'react';

import Modal from 'react-modal';
import CommentFormContainer from '../comments/comment_form_container';
import CommentIndex from '../comments/comment_index';
import UserAvatar from '../photo/user_avatar';
import Timestamp from '../photo/timestamp';
import LikeButtonContainer from '../likes/like_button_container';
import Caption from '../photo/caption';
import Likes from '../photo/likes';
import StreamIndexItem from './stream_index_item';


class Stream extends React.Component {
  componentDidMount() {
    this.props.fetchStreamPhotos();
  }

  render() {

    return (
      <div className="stream-container">
        <ul className="stream">
          { this.props.photos.map( photo => (
            <StreamIndexItem key={photo.id} photo={photo} />
          ))}
        </ul>
      </div>

    );
  }
}

export default Stream;
