import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo_id: this.props.photo.id,
      body: ""
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.creatComment(state);
  }

  render() {
    return(
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <input type="string" onChange={this.update('body')} placeholder="Add a comment..."/>
      </form>
    )
  }
}
