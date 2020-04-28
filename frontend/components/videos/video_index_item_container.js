import { connect } from 'react-redux';
import VideoIndexItem from './video_index_item';

const mSTP = state => ({
    genres: state.entities.genres
})

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(VideoIndexItem);