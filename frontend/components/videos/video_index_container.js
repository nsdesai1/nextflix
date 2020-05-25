import VideoIndex from "./video_index";
import { connect } from 'react-redux';

const mSTP = state => ({
    videos: state.entities.videos,
    genres: state.entities.genres
})

const mDTP = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
    clearVideos: () => dispatch(clearVideos())
})

export default connect(mSTP, mDTP)(VideoIndex);