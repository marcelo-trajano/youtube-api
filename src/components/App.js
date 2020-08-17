import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

import youtube from "../api/youtube";

const KEY = "AIzaSyB_gW65eypRJYUUwwMa85vwY2dJOPQ84_E";

class App extends React.Component {
  state = { videos: [] };

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

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onTermSubmit} />
        <VideoList list={this.state.videos} />
      </div>
    );
  }
}

export default App;
