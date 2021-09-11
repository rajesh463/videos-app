import React from 'react';

const VideoDetails=({video})=>{
    if(!video){
        return(
            <div class="ui segment">
            <div class="ui active inverted dimmer">
              <div class="ui large text loader">Loading</div>
            </div>
            <p></p>
            <p></p>
            <p></p>
          </div>
        );
    }
    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div >
            <div className="ui embed">
                <iframe title="Video Player" src={videoSrc}/>
            </div>
            <div className="ui segment">
                 <h4 className ="ui headers">{video.snippet.title}</h4>
                 <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetails;