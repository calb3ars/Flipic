import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';



class Stream extends React.Component {
  constructor(props) {
    super(props);

    this.renderLikeButton = this.renderLikeButton.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.createLike = this.createLike.bind(this);
    this.deleteLike = this.deleteLike.bind(this);
  }

  componentDidMount() {
    this.props.fetchStreamPhotos();
  }

  renderLikeButton(photo) {
    if (photo.likeToggle === true) {
      return (
        <img onClick={this.handleLike(photo)} src="http://res.cloudinary.com/calb3ars/image/upload/v1490209541/red_heart_vqbooo.svg"/>
      );
    } else {
      return (
        <img onClick={this.handleLike(photo)} src="http://res.cloudinary.com/calb3ars/image/upload/v1490072576/heart_bvqek2.svg"/>
      );
    }
  }

  handleLike(photo) {
    return (e) => {
      if (photo.likeToggle === true) {
        this.deleteLike(photo.id);
      } else {
        this.createLike(photo.id);
      }
    };
  }

  createLike(photoId) {
    this.props.createLike(photoId)
  }

  deleteLike(photoId) {
    this.props.deleteLike(photoId)
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

                    <Link className="user-avatar" to={`/users/${photo.user.id}`}>
                      <img className="user-avatar-pic" src={`${photo.user.profile_image}`} />
                      <p className="user-avatar-username">{photo.user.username}</p>
                    </Link>

                    <p className="timestamp">{photo.timestamp}</p>
                  </div>
                </li>

                <li key={photo.id}>
                  <img className="stream-photo" src={`${photo.url}`} />
                </li>

                <li className="photo-info">
                  <ul>
                    <li>
                      <Link to={`/users/${photo.user.id}`}>
                        <span className="photo-info-bold">{photo.user.username}
                        </span>
                      </Link>&nbsp;
                      {photo.caption}
                    </li>

                    <li className="like"><span className="photo-info-bold">{photo.likes_count} { (photo.likes_count === 1 ? "like" : "likes")}</span></li>

                    <li className="comment-container">
                      <ul className="comment">
                        <li className="comment-username"><Link to={`/users/${photo.user.id}`}><span className="photo-info-bold">username</span></Link></li>

                        <li className="comment-body">body</li>
                      </ul>
                      <ul className="comment">
                        <li className="comment-username"><span className="photo-info-bold">username2</span></li>
                        <li className="comment-body">Lorem ipsum dolor sit amet, magna assum omnium te pri, vix ei diam esse graeci. </li>
                      </ul>
                    </li>

                  </ul>
                </li>

                <li className="comment-like-form">
                  {this.renderLikeButton(photo)}
                  <form className="comment-form">
                    <input type="string" placeholder="Add a comment..."></input>
                  </form>
                  <button className="profile-ellipsis-stream icon-button ellipsis">o&nbsp;&nbsp;o&nbsp;&nbsp;o</button>
                </li>

              </ul>
            </li>
          ))}
        </ul>
      </div>

    );
  }
}

export default Stream;
