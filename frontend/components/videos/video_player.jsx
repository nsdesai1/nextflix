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
        if (this.props.type === "full") {
          this.props.fetchVideo(this.props.match.params.mediaId);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.type === "full" && prevProps.match.params.mediaId !== this.props.match.params.mediaId) {
          this.props.fetchVideo(this.props.match.params.mediaId);
        }
    }

    componentWillUnmount() {
        clearTimeout(this.clearArrow);
    }
    
    handleMouse(e) {
        e.preventDefault();
    
        this.setState({
          mouseMoving: true
        });
    
        let showArrow = () => {
          clearTimeout(this.clearArrow);
          this.clearArrow = setTimeout(() => this.setState({ mouseMoving: false }), 3500);
        };
    
        showArrow();
    }
}

export default VideoPlayer;