import React, { Component } from 'react';

class UserProfile extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.params.userId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.userId !== newProps.params.userId) {
      this.props.fetchUser(newProps.params.userId);
    }
  }

  render() {
    const { profile } = this.props;
    const photos = profile.photos;
    return(
      <div className="user-profile-container">
        <div className="user-profile">
          <div className="profile-image-container">
            <img src={`${profile.profile_image}`} className="profile-image" />
          </div>
          <div className="profile-details">
            <ul className="profile-row profile-row-1">
              <li className="profile-username">{profile.username}</li>
              <li className="profile-edit-follow-button"><button className="follow-edit-button" onClick="">Edit/Following</button></li>
              <li className="profile-ellipsis"><button className="icon-button ellipsis">o&nbsp;&nbsp;o&nbsp;&nbsp;o</button></li>
            </ul>

            <ul className="profile-row profile-row-2">
              <li className="profile-posts"><span className="profile-number">{profile.photo_count}</span> posts</li>
              <li className="profile-followers follower-following"><span className="profile-number">99</span> followers</li>
              <li className="profile-following follower-following"><span className="profile-number">99</span> following</li>
            </ul>

            <p className="profile-row profile-row-3 tagline">
              {profile.tagline}
            </p>
        </div>
      </div>

      <ul className="profile-photos">
        { photos.map( photo => (

          <li key={photo.id}><img src={`${photo.url}`}/></li>

        ))
        }
      </ul>
      </div>
    );
  }
}

export default UserProfile;
