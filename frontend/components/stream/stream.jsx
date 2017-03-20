import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';



class Stream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    this.props.fetchStreamPhotos();
  }

  render() {
    return (
      <div className="stream-container">
        <ul className="stream">
          { this.props.photos.map( photo => (
            <li  key={photo.id} className="photo-container">
              <ul className="photo-content">
                <li className="user-avatar">
                  <button to={`/users/${photo.user.id}`}><p>{photo.user.username}</p></button>
                  <p>{photo.timestamp}</p>
                </li>

                <li key={photo.id}>
                  <img src={`${photo.url}`} />
                </li>

                <li className="photo-info">
                  <ul>
                    <li>121 likes</li>

                    <li className="comment-container">
                      <ul className="comment">
                        <li className="comment-username">comment.username</li>
                        <li className="comment-body">comment.body</li>
                      </ul>
                    </li>

                  </ul>
                </li>
                <hr></hr>
                <li className="comment-like-form">
                  <button onClick=""><i className="fa fa-heart-o" aria-hidden="true"></i></button>
                  <form>
                    <input type="string" placeholder="Add a comment..."></input>
                  </form>
                  <button className="profile-ellipsis icon-button ellipsis">o&nbsp;&nbsp;o&nbsp;&nbsp;o</button>
                </li>

              </ul>
            </li>
          ))}
        </ul>
      </div>

    );
  }
}

export default Stream;
