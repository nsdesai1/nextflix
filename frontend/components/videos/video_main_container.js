import { connect } from 'react-redux';
import VideoMain from './video_main';

const msp = (state, ownProps) => {
//   const users = state.entities.users;
//   const currentUserId = state.session.currentUserId;

//   return {
//     currentUserId,
//     users
//   };
};

const mdp = dispatch => ({
});

export default connect(msp, mdp)(VideoMain);