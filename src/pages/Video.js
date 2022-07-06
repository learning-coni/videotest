import React from "react";
import SearchBar from "../components/SearchBar";
import getVideo from "../api/getVideo";
import VideoList from "../components/VideoList";
import VideoDetail from "../components/VideoDetail";

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
      selectedVideo: null,
    };
  }

  componentDidMount() {
    this.onTermSubmit("GLC");
  }

  onTermSubmit = async (term) => {
    const response = await getVideo.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelected(video) {
    this.setState({ selectedVideo: video });
  }
  render() {
    return (
      <>
        <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Video;
