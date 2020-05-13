import React from 'react';
import Link from 'react-router-dom';
import VideoPlayer from './video_player';

class VideoDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            detailsShowing: true, //CSS slideup
            videoShowing: true,
            muted: true
        }

        this.userPressedPlay = false;
        this.closeDetails = this.closeDetails.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
        this.toggleList = this.toggleList.bind(this);
    }


}

export default VideoDetails;