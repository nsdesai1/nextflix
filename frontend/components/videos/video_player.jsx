import React from 'react';
import { Link } from 'react-router-dom';

class VideoPlayer extends React.Component {
    constructor(props) {
        super(props); // props tell us what type of player we are
    
        this.state = {
          showLinkText: false,
          mouseMoving: false
        }
    
        this.clearArrow;
    
        this.handleFocus = this.handleFocus.bind(this);
        this.handleMouse = this.handleMouse.bind(this);
        this.handleGoBack = this.handleGoBack.bind(this);
    }
    
    componentDidMount() {
        // if ((isEmpty(this.props.video) || this.props.video === undefined) && this.props.type === "fullPlayer") {
        if (this.props.type === "fullPlayer") {
          this.props.fetchVideo(this.props.match.params.mediaId);
        }
    }
}

export default VideoPlayer