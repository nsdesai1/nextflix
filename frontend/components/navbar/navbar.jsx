import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='navbar-header'>
                <div>
                    <ul>
                        <img src="/assets/nextflixlogo.png" alt="logo"/>
                        <li className='navbar-login' >
                            <Link to="/login" className="login-link">
                                <button className="navbar-login">Sign In</button>
                            </Link>
                        </li>
                        {/* <li className='nav-bar-nav-link'>
                            <a className='click-link' href="">MEN</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavBar;