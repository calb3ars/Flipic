import React from 'react';
import Modal from 'react-modal';
import PhotoViewContainer from '../photo/photo_view_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagline: "",
      followerCount: this.props.profile.follower_count,
      followingCount: this.props.profile.following_count,
      followToggle: this.props.profile.followToggle,
      following: this.props.following,
      photoViewModalOpen: false,
      presentingPhoto: null
    };

    this.renderEditFollowButton = this.renderEditFollowButton.bind(this);
    this.followToggle = this.followToggle.bind(this);

    this.openPhotoViewModal = this.openPhotoViewModal.bind(this);
    this.closePhotoViewModal = this.closePhotoViewModal.bind(this);

    this.viewPhoto = this.viewPhoto.bind(this);
    this.cropPhoto = this.cropPhoto.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.params.userId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.userId !== newProps.params.userId) {
      this.props.fetchUser(newProps.params.userId);
    }
  }

  followToggle(e) {
    e.preventDefault();
    const leader_id = this.props.profile.id;
      if(this.props.profile.followToggle) {
        this.props.deleteFollow(leader_id);
      } else {
        this.props.createFollow(leader_id);
      }
  }

  renderEditFollowButton() {
    if (this.props.currentUser.id === this.props.profile.id) {
      return(
        <button className="follow-edit-button" onClick="">Edit</button>
      );
    } else {
      const following_id = this.props.params.id;
      return (
          <button className="follow-edit-button" onClick={this.followToggle}>{ this.props.profile.followToggle === true ? "Following" : "Follow" }
        </button>
      );
    }
  }

  cropPhoto(photoUrl) {


    const photoCrop = "/upload/c_thumb,h_250,w_250/";
    const photoUrlSplit = photoUrl.split("/upload/");
    const croppedUrl = photoUrlSplit[0] + photoCrop + photoUrlSplit[1];
    return croppedUrl;
  }

  openPhotoViewModal(id) {
    return e => {
    this.setState({
          photoViewModalOpen: true,
          presentingPhoto : id
      })
    }
  }

  closePhotoViewModal() {
    this.setState({
      photoViewModalOpen: false
    });
  }

  viewPhoto(photoId) {
    this.props.receiveUserPhoto(photoId);
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
              <li className="profile-edit-follow-button">{ this.renderEditFollowButton() }</li>
              <li className="profile-ellipsis"><button className="icon-button ellipsis">o&nbsp;&nbsp;o&nbsp;&nbsp;o</button></li>
            </ul>

            <ul className="profile-row profile-row-2">
              <li className="profile-posts"><span className="profile-number">{profile.photo_count}</span> posts</li>
              <li className="profile-followers follower-following"><span className="profile-number">{profile.follower_count}</span> followers</li>
              <li className="profile-following follower-following"><span className="profile-number">{profile.leader_count}</span> following</li>
            </ul>

            <p className="profile-row profile-row-3 tagline">
              {profile.tagline}
            </p>
        </div>
      </div>

      <ul className="profile-photos">
        { this.props.profile.photos.map( (photo) => {
          return(
          <li key={photo.id}>
            <img src={this.cropPhoto(`${photo.url}`)} alt={`${photo.caption}`} onClick={this.openPhotoViewModal(photo.id)}/>

          </li>
          )
        })
        }
      </ul>

      <Modal

        contentLabel="Modal"
        isOpen = {this.state.photoViewModalOpen}
        onRequestClose = {this.closePhotoViewModal}
        photo={this.props.viewPhoto}>
        <PhotoViewContainer photoId={this.state.presentingPhoto}/>
      </Modal>

      </div>
    );
  }
}

export default UserProfile;
