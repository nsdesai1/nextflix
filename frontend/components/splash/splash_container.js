import { connect } from 'react-redux';
import Splash from './splash';
import { login } from '../../actions/session_actions';

const mSTP = state => ({
    errors: state.errors.session,
    formType: 'signup'
});

const mDTP = dispatch => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(Splash);