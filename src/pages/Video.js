import React from "react";
import SearchBar from "../components/SearchBar";
import getVideo from "../api/getVideo";
import VideoList from "../components/VideoList";

class Video extends React.Component {
  // state = { images: [] };

  // childrenFunction = async (term) => {
  // const response = await unsplash.get("/search/photos", {
  //   params: { query: term },
  // });
  // this.setState({ images: response.data.results });
  // };
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
  }

  onTermSubmit = async (term) => {
    const response = await getVideo.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div>
        <h1>Video Page</h1>
        <SearchBar onFormSubmit={this.onTermSubmit} />I have
        {this.state.videos.length} videos.
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default Video;
