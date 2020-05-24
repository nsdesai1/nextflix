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

      scrollLeft(e) {
        e.preventDefault();
        const { pageNum, videosRemaining, showButtonArrow } = this.state;
    
        this.setState({
          pageNum: pageNum-1,
          videosRemaining: videosRemaining + 6,
          showButtonArrow: pageNum === 0 ? false : showButtonArrow
        });
      }
    
      scrollRight(e) {
        e.preventDefault();
        const { pageNum, videosRemaining } = this.state;
        let newVideosRemaining = videosRemaining-6;
        let newPageNum;
    
        if (newVideosRemaining <= 0) {
          newPageNum = 0;
          newVideosRemaining = this.props.videos.length;
        } else {
          newPageNum = pageNum+1;
        }
    
        this.setState({
          pageNum: newPageNum,
          videosRemaining: newVideosRemaining
        });
      }

      playVideo(id) {
        return e => {
          // debugger;
          // let video = e.currentTarget.childNodes[1].childNodes[0];
    
          // let video = e.target.offsetParent.childNodes[1].childNodes[0];
          let video = e.target.closest(".video-item").childNodes[1].childNodes[0];
    
          // let video;
          // if (e.target.className === "thumbnail-details") {
          //   video = e.target.parentElement.offsetParent.childNodes[1].childNodes[0];
          // } else if (e.target.className === "thumbnail-details-container") {
          //   video = e.target.offsetParent.childNodes[1].childNodes[0];
          // } else if (e.target.tagName === "A") {
          //   video = e.target.parentElement.offsetParent.childNodes[1].childNodes[0];
          // } else if (e.target.tagName === "H2" || e.target.className === "details-down-arrow") {
          //   video = e.target.parentElement.parentElement.offsetParent.childNodes[1].childNodes[0];
          // } else {
          //   debugger;
          //   video = e.currentTarget.childNodes[1].childNodes[0];
          // }
    
          let isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
          
          if (!isPlaying) {
            video.play();
    
            this.setState({ detailsHidden: { id: id, value: false } });
          }
        };
      }
    
      // might need to make this async or something? but detailsHidden is correctly
        // getting set to null i think
      stopVideo(id) {
        return e => {
          let video = e.currentTarget.childNodes[1].childNodes[0];
          let isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
    
          if (isPlaying) {
            video.pause();
    
            this.setState({ detailsHidden: { id: null, value: false } });
          }
        };
      }

      closeDetails(closePressed) {
        this.setState({
          detailsHidden: {id: null, value: true}
        });
    
        // DO THIS ONLY IF CLOSE BUTTON IS PRESSED
        if (closePressed === undefined || closePressed === "closing") {
          setTimeout(() => {
            this.props.history.push("/browse");
          }, 600);
        } else if (closePressed === "closing-search") {
          setTimeout(() => {
            this.props.history.push(`/search/${this.props.match.params.query}`);
          }, 600);
        } else if (closePressed === "closing-shows") {
          setTimeout(() => {
            this.props.history.push(`/browse/genre/shows`);
          }, 600);
        } else if (closePressed === "closing-movies") {
          setTimeout(() => {
            this.props.history.push(`/browse/genre/movies`);
          }, 600);
        } else if (closePressed === "closing-list") {
          setTimeout(() => {
            this.props.history.push(`/browse/my-list`);
          }, 600);
        } 
      }
}

export default VideoRow;