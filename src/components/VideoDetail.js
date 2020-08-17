import React from "react";

const VideoDetail = (props) => {
  if (!props.videoDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ui segment">
      <h4 className="ui header">{props.videoDetail.snippet.title}</h4>
      <p>{props.videoDetail.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
