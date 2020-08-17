import React from "react";
import VideoCard from "./VideoCard";

const VideoList = (props) => {
  const videos = props.list.map((video) => {
    return <VideoCard key={video.id.videoId} video={video} />;
  });

  return <div>{videos}</div>;
};

export default VideoList;
