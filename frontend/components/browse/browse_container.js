import {connect} from 'react-redux';
import Browse from './browse';
import { fetchVideos } from '../../actions/video_actions';

const mSTP = state => ({
    videos: Object.values(state.entities.videos)
})

const mDTP = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos())
})

export default connect(mSTP, mDTP)(Browse);