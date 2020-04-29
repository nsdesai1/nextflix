import React from 'react';

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.playVideo = this.playVideo.bind(this);
        this.pauseVideo = this.pauseVideo.bind(this);
        this.hideThumbnail = this.hideThumbnail.bind(this);
        this.showThumbnail = this.showThumbnail.bind(this);
    }

    getGenreNames() {
        const { video, genres } = this.props;

        let genreNames = video.genreIds.map(id => (
            genres[id].name
        )).slice(0, 3);

        return genreNames.join(" • ");
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
                <div className="video-item" onMouseEnter={this.hideThumbnail} onMouseLeave={this.showThumbnail}>
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
                    {/* <div className="video-info">
                        {this.props.title}
                        <br/>
                        {this.props.rating}, {this.props.duration}
                    </div> */}
                </div>
            </div>
        )
    }
}

export default VideoIndexItem;