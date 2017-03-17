import React from 'react';
import Modal from 'react-modal';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      modalOpen: false,
      photo: {
        url: "",
        caption: "",
        user_id: this.props.currentUser
      }
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false })
  }

  openModal() {
    this.setState({ modalOpen: true })
  }

  // update(field) {
  //   return (e) => {
  //     this.setState({
  //       photo[field] : e.target.value
  //     })
  //   }
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPhoto(this.state.photo);
    closeModal();
  }

  render() {
    return(
      <div>
        <button onClick={this.openModal}
          className="add-photo icon-button">
            <i className="fa fa-camera-retro" aria-hidden="true"></i>
        </button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          >

          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.url}
              onChange={this.update("url")}
            >

            </input>

            <input
              type="text"
              placeholder="Witty caption goes here..."
              value={this.state.caption}
              onChange={this.update("caption")}
            />

            <input
            type="submit"
            value="Upload"
            />

          </form>

        </Modal>
      </div>
    )
  }
}

export default PhotoForm;
