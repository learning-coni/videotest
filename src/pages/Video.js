import React from "react";
import SearchBar from "../components/SearchBar";

class Video extends React.Component() {
  state = { images: [] };

  childrenFunction = async (term) => {
    // const response = await unsplash.get("/search/photos", {
    //   params: { query: term },
    // });
    // this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <h1>Video Page</h1>
        <SearchBar childrenFunction={this.childrenFunction} />
      </div>
    );
  }
}

export default Video;
