import React from "react";

class VideoCard extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.video.snippet.thumbnails.default.url} />
        <label>{this.props.video.snippet.title}</label>
      </div>
    );
  }
}

export default VideoCard;
