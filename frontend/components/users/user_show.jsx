import React from 'react';
import Modal from 'react-modal';

import PhotoForm from '../photo_form/photo_form.jsx';
import { hashHistory } from 'react-router';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      logoutModalOpen: false,
      uploadModalOpen: false
    };

    this.openUploadModal = this.openUploadModal.bind(this);
    this.closeUploadModal = this.closeUploadModal.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.user.username);
    this.props.fetchUserPhotos(this.props.user.username);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.username !== this.props.params.username) {
      this.props.fetchUser(newProps.params.username);
      this.props.fetchUserPhotos(newProps.params.username);
    }
  }

  openUploadModal() {
    this.setState({uploadModalOpen: true});
  }

  closeUploadModal() {
    this.setState({uploadModalOpen: false});
  }

  openLogoutModal() {
    this.setState({logoutModalOpen: true});
  }

  closeLogoutModal() {
    this.setState({logoutModalOpen: false});
  }

  update(){}

  handleSubmit(){}

  renderProfileImage() {
    return (
      <img className="profile-image" src={this.props.user.profile_image} />
    );
  }

  renderFollowButton() {
    const user = this.props.user;
    const currentUser = this.props.currentUser;

    if(currentUser.username === user.username) {
      return(
        <button className="edit-button user-page-button">Edit Profile</button>
      );
    } else {
      return (
        <button className="follow-button user-page-button">Follow</button>
      );
    }
  }

  renderCurrentUserButtons() {
    if (this.props.currentUser.username === this.props.user.username) {
      return (
        <div>
          <button onClick={this.openUploadModal}
                  className="add-photo icon-button user-page-button">
              <i className="fa fa-camera-retro"></i>
          </button>
          <button onClick={this.openLogoutModal}
                  className="logout user-page-button">
                  <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
          </button>
        </div>
      );
    }
  }

  renderPhotos() {
    return this.props.photos.map(photo => {
      return <Photo
        key={photo.id}
        photo={photo}
        user={this.props.user}
        currentUser={this.props.currentUser}
      />
    })
  }

  render() {
    return (
        <div className="user-profile-container">
          <UserDetail user={this.props.user}/>
          <UserPhotos user={this.props.user.photos}/>
        </div>
      )
  }
}

export default UserShow;
