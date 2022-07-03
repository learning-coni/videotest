import React from "react";

const VideoList = (props) => {
  const HTMLRender = props.videos.map((video) => {
    const { id } = video;
    return (
      <div className="ui card">
        <div className="content">
          <div className="right floated meta">14h</div>
          <video
            className="ui avatar image"
            src={`https://www.youtube.com/watch?v=${id.videoId}`}
          />{" "}
          Elliot
        </div>
        <div className="image"></div>
        <div className="content">
          <span className="right floated">
            <i className="heart outline like icon"></i>
            17 likes
          </span>
          <i className="comment icon"></i>3 comments
        </div>
        <div className="extra content">
          <div className="ui large transparent left icon input">
            <i className="heart outline icon"></i>
            <input type="text" placeholder="Add Comment..." />
          </div>
        </div>
      </div>
    );
  });

  // const HTMLRender = "dd";
  // console.log(props.videos);

  return <div className="ui segment">{HTMLRender}</div>;
};

export default VideoList;
