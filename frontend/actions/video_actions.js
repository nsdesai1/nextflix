import * as VideoAPIUtil from '../util/video_api_util';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const CLEAR_VIDEOS = 'CLEAR_VIDEOS';

export const receiveVideos = videos => ({
    type: RECEIVE_VIDEOS,
    videos
});

export const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video
});

export const clearVideos = () => ({
    type: CLEAR_VIDEOS
});

export const fetchVideos = () => dispatch => (
    VideoAPIUtil.fetchVideos()
    .then(videos => dispatch(receiveVideos(videos)))
);

export const fetchVideo = id => dispatch => (
    VideoAPIUtil.fetchVideo(id)
    .then(video => dispatch(receiveVideo(video)))
);