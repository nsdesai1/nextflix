import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSignup = this.handleSignup.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleDemo(e) {
        e.preventDefault();

        const demoUser = { 
            email: 'jhalpert@gmail.com',
            password: 'bigtuna'
        }
        this.props.login(demoUser);
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
    }
    
    handleSignup(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user);
    }

    render() {
        return (
            <div className='splash-container'>
                <h1 className='splash-main-text'>
                    Unlimited movies, TV shows, and more.
                </h1>
                <h2 className='splash-text'>
                    Watch anywhere. Cancel anytime.
                </h2>
                <div className='splash-signup'>
                    <label>Email:
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                        />
                    </label>
                    <Link to="/signup" className="signup-link">
                        <button className="splash-signup-btn">TRY IT NOW ></button>
                    </Link>
                </div>
                <h3 className='splash-subtext'>
                    Ready to watch? Enter your email to signup or 
                    <button className='splash-demo' onClick={this.handleDemo}>try the demo!</button>
                </h3>
            </div>
        )
    }
}

export default Splash;