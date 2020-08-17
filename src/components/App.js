import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";

const KEY = "AIzaSyB_gW65eypRJYUUwwMa85vwY2dJOPQ84_E";

class App extends React.Component {
  state = { imgs: [] };

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
  };

  onSearchSubmit = async (term) => {
    //console.log(term);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
