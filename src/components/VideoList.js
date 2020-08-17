import React from "react";
import VideoCard from "./VideoCard";

const VideoList = (props) => {
  const videos = props.list.map((video) => {
    return (
      <VideoCard
        key={video.id.videoId}
        video={video}
        onVideoSelected={props.onVideoSelected}
      />
    );
  });

  return <div className="ui relaxed divided list">{videos}</div>;
};

export default VideoList;
