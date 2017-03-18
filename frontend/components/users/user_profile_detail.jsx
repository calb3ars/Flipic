import React from 'react';


class UserProfileDetail extends React.Component {
  constructor(props) {
    super(props);
    let user = this.props.user;
    this.state = {
      username: user.username,
      profile_image: user.profile_image,
      tagline: user.tagline
    };
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  openModal() {
    this.setState({
      modalOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false
    });
  }

  render() {
    return(
      <div className="user-profile-container">
        <div className="user-info">
          <div className="user-info user-info-first-row">
            <img className="user-profile-image"/>
            <p>{this.state.username}</p>
            <button to={`/users/${this.props.user_id}/edit`} value="Edit Profile"/>
            <button onClick={this.openModal}>Logout Button</button>
              <Modal>
                <button onClick={this.props.logout}>Log Out</button>
                <button onClick={this.closeModal}>Cancel</button>
              </Modal>
          </div>

          <div className="user-info user-info-second-row">
            <div className="post-count">56</div>
            <button className="followers" onClick={this.openModal}>{436,890} followers</button>
            <button className="following" onClick={this.openModal}>{339,249} following</button>

          </div>
        </div>
    )
  }
}
