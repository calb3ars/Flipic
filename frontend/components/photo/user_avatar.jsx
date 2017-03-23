import React from 'react';
import { Link } from 'react-router';

class UserAvatar extends React.Component {
  render() {
    const photo = this.props.photo;
    const user = photo.user;
    return (
      <div className="user-avatar">
        <Link className="user-avatar-link" to={`/users/${user.id}`}>
          <img className="user-avatar-pic" src={`${user.profile_image}`} />
        </Link>
        <div className="user-avatar-name-location">
          <p className="user-avatar-username"><Link className="user-avatar-link">{user.username}</Link></p>
          <div className="photo-header-location">{photo.location}</div>
        </div>
      </div>
    );
  }
}

export default UserAvatar;
