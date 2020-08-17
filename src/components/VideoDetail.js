import React from "react";

const VideoDetail = (props) => {
  if (!props.videoDetail) {
    return (
      <div>
        <div className="ui embed">
          <iframe title="video player">Loading...</iframe>
        </div>
        <div className="ui segment">
          <h4 className="ui header">Loading...</h4>
          <p></p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="ui embed">
        <iframe
          title="video player"
          src={`https://www.youtube.com/embed/${props.videoDetail.id.videoId}`}
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{props.videoDetail.snippet.title}</h4>
        <p>{props.videoDetail.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
