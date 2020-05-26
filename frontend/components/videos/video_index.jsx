import React from 'react';
import VideoMainContainer from './video_main_container';
import VideoRowContainer from './video_row_container';
import { isEmpty } from 'lodash';

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);
      }
    
      componentDidMount() {
        this.props.fetchVideos();
      }
    
      componentDidUpdate(prevProps) {
        if (isEmpty(this.props.videos) || 
          Object.keys(this.props.videos).length === 1 || 
          prevProps.location.pathname.startsWith("watch")
        ) this.props.fetchVideos();
      }
    
      componentWillUnmount() {
        this.props.clearVideos();
      }
}

export default VideoIndex;