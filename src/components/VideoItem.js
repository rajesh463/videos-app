import React from 'react';
import './VideoItem.css';
const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => { onVideoSelect(video) }} className="video-item item">
            <img 
                className="ui image" 
                alt={video.snippet.title} 
                src={video.snippet.thumbnails.medium.url} 
            />
            <div className="content" >
                <div className="header" >
                    <h4 className="ui headers">{video.snippet.title}</h4>
                    {/* <p>{video.snippet.description}</p> */}
                </div>
            </div>
        </div>
    );
}

export default VideoItem;