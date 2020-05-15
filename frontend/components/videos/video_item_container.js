import { connect } from 'react-redux';
import VideoItem from './video_item';

const mSTP = state => ({
    genres: state.entities.genres
})

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(VideoItem);