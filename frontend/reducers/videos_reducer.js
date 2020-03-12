import { RECEIVE_VIDEOS, RECEIVE_VIDEO } from "../actions/video_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const videosReducer = ( state = {}, action ) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEOS:
            return action.videos;
        case RECEIVE_VIDEO:
            const newVideo = { [action.video.id]: action.video }
            return Object.assign({}, newVideo)
        case LOGOUT_CURRENT_USER: 
            return {};
        default:
            return state;
    }
}

export default videosReducer;