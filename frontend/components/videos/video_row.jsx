import React from 'react';
import VideoItemContainer from './video_item_container';
import VideoDetailsContainer from './video_details_container';
import { Route } from 'react-router-dom';

class VideoRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          videos: this.props.videos, // all the videos
          genre: this.props.genre,
          pageNum: 0,
          videosRemaining: this.props.videos.length,
          showButtonArrow: false,
          detailsHidden: {id: null, value: true}, // the thumbnail details for the item being hovered over
        }
    
        this.scrollLeft = this.scrollLeft.bind(this);
        this.scrollRight = this.scrollRight.bind(this);
        this.toggleArrow = this.toggleArrow.bind(this);
        this.playVideo = this.playVideo.bind(this);
        this.stopVideo = this.stopVideo.bind(this);
        this.closeDetails = this.closeDetails.bind(this);
      }
    
      toggleArrow(e) {
        this.setState({
          showButtonArrow: !this.state.showButtonArrow
        });
      }    
}

export default VideoRow;