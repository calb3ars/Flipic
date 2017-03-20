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

    return(
      <div className="user-profile-container">
        <div className="user-profile">
          <div className="profile-image-container">
            <img src={`${profile.profile_image}`} className="profile-image" />
          </div>
          <div className="profile-details">
            <ul className="profile-row profile-row-1">
              <li className="profile-username">{profile.username}</li>
              <li className="profile-edit-follow-button"><button className="follow-edit-button" onclick="">Edit/Following</button></li>
              <li><button className="icon-button"><i className="icon-ellipsis-horizontal profile-options"></i></button></li>
            </ul>

            <ul className="profile-row profile-row-2">
              <li><span className="profile-number">{profile.photo_count}</span> posts</li>
              <li><span className="profile-number">99</span> followers</li>
              <li><span className="profile-number">99</span> following</li>
            </ul>

            <p className="profile-row profile-row-3 tagline">
              {profile.tagline}
            </p>
        </div>
      </div>

        <section className="profile-photos">
          <ul>
            { this.props.profile.photos.map( (photo) => (
              <li>
                <img src={$`{photo.url}`} alt={`${photo.caption}`}/>
              </li>
            ))

            }
          </ul>
        </section>
      </div>
    );
  }
}

export default UserProfile;
