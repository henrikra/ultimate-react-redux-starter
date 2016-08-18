import axios from 'axios';

const YOUTUBE_DATA_API_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyCPLAZUcdIklVIGjfU5_WemijkkkxVsErU';

export function searchYouTube(searchTerm) {
  const params = {
    type: 'video',
    part: 'snippet',
    key: API_KEY,
    maxResults: 20,
    q: searchTerm
  };

  return axios.get(YOUTUBE_DATA_API_URL, { params });
}
