import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import VideoListContainer from '../videos/video_list_container';

class Browse extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        const listItems = this.props.videos.slice()

        if (!this.props.videos[0]) {
            return null;
        } else {
            return(

                <main className="browse">
                    {/* <h1>Browse page!</h1> */}
                    <div className="browse-bg"> </div>
                    <div className="main-video">
                        <video 
                            autoPlay 
                            loop 
                            muted 
                            className="mv-player" 
                            src={this.props.videos[0].trailer} 
                        />
                    </div>
                    <NavbarContainer />
                    <div className="video-row">
                        <VideoListContainer className="video-container" vids={listItems} />
                    </div>
                </main>
            )
        }
    }
}

export default Browse;