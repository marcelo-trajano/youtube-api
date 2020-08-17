import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

import youtube from "../api/youtube";

const KEY = "AIzaSyB_gW65eypRJYUUwwMa85vwY2dJOPQ84_E";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    const res = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });
    console.log(res);
    this.setState({ videos: res.data.items });
  };

  onVideoSelected = (video) => {
    console.log(video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onTermSubmit} />
        <VideoDetail videoDetail={this.state.selectedVideo} />
        <VideoList
          list={this.state.videos}
          onVideoSelected={this.onVideoSelected}
        />
      </div>
    );
  }
}

export default App;
