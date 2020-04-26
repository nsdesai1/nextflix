import {connect} from 'react-redux';
import { fetchVideos, clearVideos } from '../../actions/video_actions';
import Browse from './browse';

const msp = state => ({
    videos: Object.values(state.entities.videos)
})

const mdp = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
    clearVideos: () => dispatch(clearVideos())
})

export default connect(msp, mdp)(Browse);