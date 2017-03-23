import React from 'react';
import { Link } from 'react-router';

class Caption extends React.Component {
  render() {
    const photo = this.props.photo;
    return (
      <li>
        <Link to={`/users/${photo.user.id}`}>
          <span className="photo-info-bold">{photo.user.username}
          </span>
        </Link>&nbsp;
        {photo.caption}
      </li>
    );
  }
}

export default Caption;
