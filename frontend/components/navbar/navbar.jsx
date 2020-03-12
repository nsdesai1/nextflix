import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        return (
            <nav className='navbar-header'>
                <div className="nav-left">
                    <Link to="/browse" className="logo-link">
                        <div id="browse-logo"></div>
                    </Link>
                    <Link to="/browse" className="nav-link">
                        <h3 className="nav-text" id="home-text">Home</h3>
                    </Link>
                    <Link to="/browse" className="nav-link">
                        <h3 className="nav-text" id="movies-text">Movies</h3>
                    </Link>
                    <Link to="/browse" className="nav-link">
                        <h3 className="nav-text" id="list-text">My List</h3>
                    </Link>
                </div>
                <div className="nav-right">
                    <div className="nav-logout">
                        <button className="logout-btn" onClick={this.handleLogout}>Sign Out</button>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;

{/* <div>
                    <ul>
                        <img src="/assets/nextflixlogo.png" alt="logo"/>
                        <li className='navbar-login' >
                            <Link to="/browse" className="browse-link">
                                <button className="navbar-login">Sign In</button>
                            </Link>
                        </li>
                        <li className='nav-bar-nav-link'>
                            <a className='click-link' href="">MEN</a>
                        </li>
                    </ul>
                </div> */}