import React from 'react';
import UserProfileShowContainer from './user_profile_show_container';
import UserImagesContainer from './user_images_container';

class UserShow extends React.Component {

  render() {
    return (
      <div>
        <UserProfileDetailContainer props={this.props}/>
        <br />
        <UserImagesContainer props={this.props}/>
      </div>
    );
  }
}
