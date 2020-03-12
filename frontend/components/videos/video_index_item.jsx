import React from 'react';

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.playVideo = this.playVideo.bind(this);
        this.pauseVideo = this.pauseVideo.bind(this);
        this.hideThumbnail = this.hideThumbnail.bind(this);
        this.showThumbnail = this.showThumbnail.bind(this);
    }

    playVideo(e) {
        e.currentTarget.play();
    }

    pauseVideo(e) {
        e.currentTarget.pause();
    }

    showThumbnail(e) {
        e.currentTarget.classList.remove("play-video")
    }

    hideThumbnail(e) {
        e.currentTarget.classList.add("play-video")
    }

    render() {
        return (
            <div >
                <ul className="video-item" onMouseEnter={this.hideThumbnail} onMouseLeave={this.showThumbnail}>
                    {/* <li>{this.props.title}</li>
                    <br/>
                    <li>{this.props.description}</li>
                    <br/>
                    <li>{this.props.media_type}</li>
                    <br/>
                    <li>{this.props.duration}</li>
                    <li>{this.props.rating}</li>
                    <li>{this.props.year}</li> */}
                    <img 
                        src={this.props.thumbnail} 
                        className="video-thumbnail"
                    />
                    <video 
                        // autoPlay 
                        loop 
                        muted 
                        className="video-player" 
                        onMouseEnter={this.playVideo} 
                        onMouseLeave={this.pauseVideo} 
                        src={this.props.trailer} 
                    /> 
                    {/* <li>{this.props.trailer}</li> */}
                </ul>
            </div>
        )
    }
}

export default VideoIndexItem;