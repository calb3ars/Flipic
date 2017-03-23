import React from 'react';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);

    this.renderLikeButton = this.renderLikeButton.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.createLike = this.createLike.bind(this);
    this.deleteLike = this.deleteLike.bind(this);
  }

  renderLikeButton(photo) {
    if (photo.likeToggle === true) {
      return (
        <img className="like-button" onClick={this.handleLike(photo)} src="http://res.cloudinary.com/calb3ars/image/upload/v1490209541/red_heart_vqbooo.svg"/>
      );
    } else {
      return (
        <img className="like-button" onClick={this.handleLike(photo)} src="http://res.cloudinary.com/calb3ars/image/upload/v1490072576/heart_bvqek2.svg"/>
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
    this.props.createLike(photoId);
  }

  deleteLike(photoId) {
    this.props.deleteLike(photoId);
  }

  render() {
    return(
      <div className="like-button-container">
        {this.renderLikeButton(this.props.photo)}
      </div>
    )
  }

}

export default LikeButton;
