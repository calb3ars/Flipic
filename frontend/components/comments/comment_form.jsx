import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo_id: this.props.photo.id,
      body: ""
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  clearForm() {
    this.field.value = '';
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state).then(this.clearForm);
  }

  render() {
    return(
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <input type="string" ref={ node => this.field = node } onChange={this.update('body')} value={this.state.body} placeholder="Add a comment..."/>
      </form>
    );
  }
}

export default CommentForm;
