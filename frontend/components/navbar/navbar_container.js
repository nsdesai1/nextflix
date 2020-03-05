import NavBar from './navbar';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, logout } from '../../actions/session_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.currentUserId]
})

const mDTP = dispatch => ({
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(NavBar);

