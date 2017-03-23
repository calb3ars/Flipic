import React from 'react';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: this.props.photo.likeToggle
    }

    this.renderLikeButton = this.renderLikeButton.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.Like = this.Like.bind(this);
    this.Unlike = this.Unlike.bind(this);
  }

  renderLikeButton(photo) {
    if (this.state.liked === true) {
      return (
        <img className="like-button" onClick={this.handleLike(this.props.photo)} src="http://res.cloudinary.com/calb3ars/image/upload/v1490209541/red_heart_vqbooo.svg"/>
      );
    } else {
      return (
        <img className="like-button" onClick={this.handleLike(this.props.photo)} src="http://res.cloudinary.com/calb3ars/image/upload/v1490072576/heart_bvqek2.svg"/>
      );
    }
  }

  handleLike(photo) {
    return (e) => {
      if (this.state.liked === true) {
        this.Unlike(photo.id);
        this.setState({
          liked: false
        })
      } else {
        this.Like(photo.id);
        this.setState({
          liked: true
        })
      }
    };
  }

  Like(photoId) {
    this.props.createLike(this.props.photo.id);

  }

  Unlike(photoId) {
    this.props.deleteLike(this.props.photo.id);
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
