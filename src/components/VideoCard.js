import React from "react";
import "./VideoItem.css";

const VideoCard = (props) => {
  return (
    <div
      onClick={() => {
        props.onVideoSelected(props.video);
      }}
      className="video-item item"
    >
      <img
        className="ui image"
        src={props.video.snippet.thumbnails.default.url}
      />
      <div className="content">
        <div className="header">{props.video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoCard;
