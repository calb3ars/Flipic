import React from 'react';
import UserProfileDetailContainer from './user_profile_detail_container';
import UserShowContainer from "./user_show_container";

class UserShow extends React.Component {

  render() {
    return (
      <div>
        <UserProfileDetailContainer props={this.props}/>
        <br />

      </div>
    );
  }
}

export default UserShow;
