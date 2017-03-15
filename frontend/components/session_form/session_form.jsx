import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  update(field) {
    return (e) => this.setState({
      [field] : e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({ user });
  }

  navLink() {
    if (this.props.formType === "login") {
      return <Link to="/signup">Sign up instead</Link>;
    } else {
      return <Link to="/login">Log in instead</Link>;
    }
  }

  renderErrors() {
    return(
      <ul className="login-error-container errors">
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`} className="login-error">
            { error }
          </li>
        ))}
      </ul>
    );
  }

  componentWillReceiveProps(newProps) {
    if (this.props.formType !== newProps.formType) {
      this.props.clearErrors();
    }
  }

  render() {
    const submit_text =  this.props.formType === ('login') ? "Log In" : "Sign Up";

    return(
      <div className="session-form-container col-1-3">
        <form onSubmit={this.handleSubmit} className="session-form-box">
          <h2 className="session-form-header flipic-text">Flipic</h2>
          <p className="session-form-tagline flipic-tagline">The place to view beautiful photos</p>
          <br />
          <p className="session-form-links">Please {this.props.formType} or {this.navLink()}</p>
          {this.renderErrors()}

          <div className="session-form">
            <br />
            <label>
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="session-form-input"
                placeholder="Username"
              />
            </label>
            <br />
            <label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="session-form-input"
                placeholder="Password"
              />
            </label>
            <br />
            <input type="submit" value={submit_text} className="session-form-submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
