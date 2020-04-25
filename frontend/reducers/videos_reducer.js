import { RECEIVE_VIDEOS, RECEIVE_VIDEO, CLEAR_VIDEOS } from "../actions/video_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const videosReducer = ( state = {}, action ) => {
    Object.freeze(action);

    switch (action.type) {
        case RECEIVE_VIDEOS:
            return action.payload;
        case RECEIVE_VIDEO:
            const newVideo = { [action.payload.video.id]: action.payload.video };
            return Object.assign({}, newVideo);
        case CLEAR_VIDEOS:
            return {};
        case LOGOUT_CURRENT_USER: 
            return {};
        default:
            return state;
    }
}

export default videosReducer;