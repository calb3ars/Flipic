import React from 'react';
import Modal from 'react-modal';
import Dropzone from 'react-dropzone';
import request from 'superagent';
const CLOUDINARY_UPLOAD_PRESET = 'Flipic_image_upload';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/calb3ars/image/upload';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      modalOpen: false,
      url: "",
      caption: ""
    };

    this.closeModal = this.closeModal.bind(this);
    this.openMOdal = this.openModal.bind(this);

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.log(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          url: response.body.secure_url
        });
      }
    });
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    const url = this.state.url;
    const caption = this.state.caption;
    e.preventDefault();
    this.props.createPhoto(
      {
        url,
        caption
      }
    );
  }

  render() {
    return(
      <div>
        <button onClick={this.openModal}
          className="add-photo icon-button">
            <i className="fa fa-camera-retro" aria-hidden="true"></i>
        </button>

          <form onSubmit={this.handleSubmit}>
            <input
              type="hidden"
              value={this.state.url}
              onChange={this.update("url")}
            />

            <div>
              { this.state.url === '' ? null :
                <div>
                  <img src={this.state.url} />
                </div>}
            </div>

            <div>
              <Dropzone
                multiple={false}
                accept="image/*"
                className="image-form-dropzone"
                onDrop={this.onImageDrop.bind(this)}
              >
                <p>Drop an image or click to select a file to upload.</p>
              </Dropzone>
            </div>

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

      </div>
    )
  }
}

export default PhotoForm;
