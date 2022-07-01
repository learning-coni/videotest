import React from "react";
// import SearchBar from './SearchBar';
import { Route, Routes, Link } from "react-router-dom";
import Home from "../pages/Home";
import Video from "../pages/Video";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/video">Video</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </div>
    );
  }
}

export default App;
