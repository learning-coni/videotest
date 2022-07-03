import axios from "axios";

const KEY = "AIzaSyDYjUd2rGX9egi3xLcnn3NaqH1P2bk_BO4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
