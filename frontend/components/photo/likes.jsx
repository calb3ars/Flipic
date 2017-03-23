import React from 'react';


class Likes extends React.Component {
  render() {
    const photo = this.props.photo;
    return (
      <li className="like">
        <span className="photo-info-bold">{photo.likes_count} { (photo.likes_count === 1 ? "like" : "likes")}</span>
      </li>
    );
  }
}

export default Likes;
