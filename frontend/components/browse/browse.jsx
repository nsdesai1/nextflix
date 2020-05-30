// import React from 'react';
// import NavbarContainer from '../navbar/navbar_container';
// import VideoListContainer from '../videos/video_list_container';

// class Browse extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     componentDidMount() {
//         this.props.fetchVideos();
//     }

//     componentWillUnmount() {
//         this.props.clearVideos();
//     }

//     render() {
//         const listItems1 = this.props.videos.slice(0, 4)
//         const listItems2 = this.props.videos.slice(4, 9)
//         const listItems3 = this.props.videos.slice(9, 15)

//         if (!this.props.videos[0]) {
//             return null;
//         } else {
//             return(

//                 <main className="browse">
//                     {/* <h1>Browse page!</h1> */}
//                     <div className="browse-bg"> </div>
//                     <div className="main-video">
//                         <video 
//                             autoPlay 
//                             loop 
//                             muted 
//                             className="mv-player" 
//                             src={this.props.videos[0].trailer} 
//                         />
//                     </div>
//                     <div className="mv-display">
//                         <div className="mv-logo"></div>
//                         <div className="mv-header">{this.props.videos[0].title}</div>
//                         <div className="mv-header">{this.props.videos[0].year}, {this.props.videos[0].duration}</div>
//                         <div className="mv-header"> Genres: Action, Adventure, Sci-Fi</div>
//                         <div className="mv-text">{this.props.videos[0].description}</div>
//                     </div>
//                     <button className="mv-button" id="mv-play"> Play </button>
//                     <button className="mv-button" id="mv-list"> My List </button>
//                     <NavbarContainer />
//                     <div className="video-row">
//                         <VideoListContainer className="video-container" vids={listItems1} genre={"Sci-Fi"} />
//                     </div>
//                     <div className="video-row2">
//                         <VideoListContainer className="video-container" vids={listItems2} genre={"Comedy"} />
//                     </div>
//                     <div className="video-row3">
//                         <VideoListContainer className="video-container" vids={listItems3} genre={"Popular"} />
//                     </div>
//                     <footer></footer>
//                 </main>
//             )
//         }
//     }
// }

// export default Browse;