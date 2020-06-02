import VideoIndex from "./video_index";
import { fetchVideos, clearVideos } from '../../actions/video_actions';
import { connect } from 'react-redux';

const msp = state => ({
    videos: state.entities.videos,
    genres: state.entities.genres
})

const mdp = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
    clearVideos: () => dispatch(clearVideos())
})

export default connect(msp, mdp)(VideoIndex);