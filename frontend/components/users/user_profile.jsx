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
      <div className="user-profile">
        <div className="profile-details">
          <img src={`${profile.profile_image}`} className="profile-image" />

          <section className="profile-row profile-first-row">
            <ul>
              <li>{profile.username}</li>
              <li><button>Following</button></li>
              <li><button className="icon-button"><i className="icon-ellipsis-horizontal profile-options"></i></button></li>
            </ul>
          </section>

          <section className="profile-row profile-second-row">
            <ul>
              <li>{profile.photo_count} posts</li>
              <li> followers</li>
              <li>following</li>
            </ul>
          </section>
          <section className="profile-row profile-third-row">
            <p className="tagline">
              {profile.tagline}
            </p>
          </section>
        </div>

        <section className="profile-images">
          <ul>
            { this.props.profile.photos.map( (photo) => (
              <img src={$`{photo.url}`} alt={`${photo.caption}`}/>
            ))

            }
          </ul>
        </section>
      </div>
    );
  }
}

export default UserProfile;
