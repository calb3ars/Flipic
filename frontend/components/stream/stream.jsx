import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import CommentFormContainer from '../comments/comment_form_container';
import LikeButtonContainer from '../likes/like_button_container';


class Stream extends React.Component {
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

                <li className="user-avatar-container">
                  <div className="photo-header">
                    <div className="user-avatar">
                      <Link className="user-avatar-link" to={`/users/${photo.user.id}`}>
                        <img className="user-avatar-pic" src={`${photo.user.profile_image}`} />
                      </Link>
                      <div className="user-avatar-name-location">
                        <p className="user-avatar-username"><Link className="user-avatar-link">{photo.user.username}</Link></p>
                        <div className="photo-header-location">{photo.location}</div>
                      </div>
                  </div>
                    <p className="timestamp">{photo.timestamp}</p>
                  </div>
                </li>

                <li key={photo.id}>
                  <img className="stream-photo photo-image" src={`${photo.url}`} />
                </li>

                <li className="photo-info">
                  <ul>
                    <li>
                      <Link to={`/users/${photo.user.id}`}>
                        <span className="photo-info-bold">{photo.user.username}
                        </span>
                      </Link>&nbsp;
                      {photo.caption}
                    </li>

                    <li className="like"><span className="photo-info-bold">{photo.likes_count} { (photo.likes_count === 1 ? "like" : "likes")}</span></li>

                    <li className="comment-container">
                      <ul className="comment">
                        <li className="comment-username">
                          <Link to={`/users/${photo.user.id}`}>
                            <span className="photo-info-bold">username</span>
                          </Link>
                        </li>

                        <li className="comment-body">body</li>
                      </ul>
                    </li>

                  </ul>
                </li>

                <div className="comment-like-form">
                  <LikeButtonContainer photo={photo} />
                  <CommentFormContainer photo={photo} />
                </div>

              </ul>
            </li>
          ))}
        </ul>
      </div>

    );
  }
}

export default Stream;


// <div className="stream-container">
//   <ul className="stream">
//     { this.props.photos.map( photo => (
//       <li  key={photo.id} className="photo-container">
//         <ul className="photo-content">
//
//           <li className="user-avatar-container">
//             <div className="photo-header">
//               <div className="user-avatar">
//                 <Link className="user-avatar-link" to={`/users/${photo.user.id}`}>
//                   <img className="user-avatar-pic" src={`${photo.user.profile_image}`} />
//                 </Link>
//                 <div className="user-avatar-name-location">
//                   <p className="user-avatar-username"><Link className="user-avatar-link">{photo.user.username}</Link></p>
//                   <div className="photo-header-location">{photo.location}</div>
//                 </div>
//             </div>
//               <p className="timestamp">{photo.timestamp}</p>
//             </div>
//           </li>
//
//           <li key={photo.id}>
//             <img className="stream-photo photo-image" src={`${photo.url}`} />
//           </li>
//
//           <li className="photo-info">
//             <ul>
//               <li>
//                 <Link to={`/users/${photo.user.id}`}>
//                   <span className="photo-info-bold">{photo.user.username}
//                   </span>
//                 </Link>&nbsp;
//                 {photo.caption}
//               </li>
//
//               <li className="like"><span className="photo-info-bold">{photo.likes_count} { (photo.likes_count === 1 ? "like" : "likes")}</span></li>
//
//               <li className="comment-container">
//                 <ul className="comment">
//                   <li className="comment-username"><Link to={`/users/${photo.user.id}`}><span className="photo-info-bold">username</span></Link></li>
//
//                   <li className="comment-body">body</li>
//                 </ul>
//                 <ul className="comment">
//                   <li className="comment-username"><span className="photo-info-bold">username2</span></li>
//                   <li className="comment-body">Lorem ipsum dolor sit amet, magna assum omnium te pri, vix ei diam esse graeci. </li>
//                 </ul>
//               </li>
//
//             </ul>
//           </li>
//
//           <li className="comment-like-form">
//             {this.renderLikeButton(photo)}
//             <form className="comment-form">
//               <input type="string" placeholder="Add a comment..."></input>
//             </form>
//             <button className="profile-ellipsis-stream icon-button ellipsis">o&nbsp;&nbsp;o&nbsp;&nbsp;o</button>
//           </li>
//
//         </ul>
//       </li>
//     ))}
//   </ul>
// </div>
