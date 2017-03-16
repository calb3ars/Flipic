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
      return <Link to="/signup" className="link">Sign up</Link>;
    } else {
      return <Link to="/login" className="link">Log in</Link>;
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
    const submit_text =  this.props.formType === ('login') ? "Log in" : "Sign up";
    const loginText = this.props.formType === ('login') ? "Don't have" : "Have";
    return(
      <div className="session-page-container">
        <div className="hero-container">
          <img className="hero" src="http://res.cloudinary.com/calb3ars/image/upload/c_scale,h_1259,q_100:420/v1489625871/hero_t1sdg3.png"/>
        </div>

        <div className="session-form-container col-1-3">
          <form onSubmit={this.handleSubmit} className="session-form-box">
            <h2 className="session-form-header flipic-text">Flipic</h2>
            <p className="session-form-tagline flipic-tagline">The place to view beautiful photos</p>

            <div className="session-form">
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="session-form-input"
                placeholder="Username"
              />

              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="session-form-input password"
                placeholder="Password"
              />

              <input type="submit" value={submit_text} className="session-form-submit" />

              <div className="form-toggle-container">
                <p className="session-form-toggle-link">{`${loginText} an account? `} {this.navLink()}</p>
                {this.renderErrors()}
              </div>
            </div>
          </form>

        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
