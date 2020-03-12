import React from 'react';
import VideoIndexItemContainer from '../videos/video_index_item_container';

class VideoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2 className="genre-title">Genre Title</h2>
                <section className="row-container">
                    {
                        this.props.vids.slice(1).map(video => {
                            return (
                                <VideoIndexItemContainer 
                                    key={video.id}
                                    title={video.title}
                                    description={video.description}
                                    media_type={video.media_type}
                                    duration={video.duration}
                                    rating={video.rating}
                                    year={video.year}
                                    trailer={video.trailer}
                                    thumbnail={video.thumbnail}
                                />
                            )
                        })
                    }
                </section>
            </div>
        )
    }
}

export default VideoList;