import React from 'react';
import Modael from 'react-modal';

class UserProfileDetail extends React.Component {
  constructor(props) {
    super(props);
    let username = this.props.params.username;
    this.state = {
      username: username,
      profile_image: username.image_url,
      tagline: username.tagline
    };
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.username !== this.state.username) {
      return this.setState({
        username: newProps.params.username
      });
    }
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
      </div>
    );
  }
}

export default UserProfileDetail;
