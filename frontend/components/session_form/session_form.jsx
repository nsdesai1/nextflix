import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
      const formTypeController = () => {
        if (this.props.formType === 'signup') {
          return (
            <div>
              <form onSubmit={this.handleSubmit}>
                <input className="form-field" id="field-1" placeholder="Email Address" type="text" 
                value={this.state.email} onChange={this.update("email")}/>
                <input className="form-field" placeholder="Password" type="password"
                value={this.state.password} onChange={this.update("password")}/>
                <br/>
                <div className="input-group">
                  {/* <input type="submit" className="splash-signup-btn" value={"TRY 30 DAYS FREE"} >
                  <span class="input-group-arrow"> <i  class="fas fa-chevron-right"></i> </span> </input> */}
                  <button onClick={this.handleSubmit} className="splash-signup-btn" > TRY 30 DAYS FREE <span className="input-arrow"> <i  className="fas fa-chevron-right"></i> </span> </button>
                </div>
              </form>
            </div>
          )
        } else {
          return (
            <main>
              <nav className="login-nav">
                <Link to="/" className="">
                  <div id="logo"></div>
                </Link>
              </nav>
              <div className="login-container">
                  <div id="login-image"></div>
                  <div className="login-box">
                      <div className="login-content">
                        <h2 className="login-header">Sign In</h2>
                        <form onSubmit={this.handleSubmit} className="login-form">
                            <label >
                                <input className="login-field" type="text" value={this.state.email} placeholder="Email" onChange={this.update("email")} />
                            </label>
                            <label>
                                <input className="login-field" type="password" value={this.state.password} placeholder="Password" onChange={this.update("password")} />
                            </label>
                          <button onClick={this.handleSubmit} className="login-btn">Sign In</button>
                        </form>
                        <div className="login-footer">
                            <span className="signup-span">New to Nextflix? </span>
                            <Link className="signup-link" to="/">Sign up now.</Link>
                        </div>
                      </div>
                  </div>
              </div>
            </main>
          )
      }
    }
    return (
      <div>
          {formTypeController()}
      </div>
    )
  }
}

export default SessionForm;

{/* <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="form-input"
              />
            </label>
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="form-input"
              />
            </label>
            <input className="splash-signup-btn" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>

export default SessionForm; */}
