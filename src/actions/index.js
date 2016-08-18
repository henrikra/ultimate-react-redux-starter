import types from '../constants/ActionTypes';
import { searchYouTube } from '../utils/youtube';

function fetchSearchResultsSuccess(searchResults) {
  return {
    type: types.FETCH_SEARCH_RESULTS,
    searchResults
  };
}

export function fetchSearchResults(searchTerm) {
  return dispatch => {
    return searchYouTube(searchTerm)
      .then(({ data }) => dispatch(fetchSearchResultsSuccess(data.items)));
  };
}

export function addToPlaylist(video) {
  return {
    type: types.ADD_TO_PLAYLIST,
    video
  };
}

export function removeFromPlaylist(videoId) {
  return {
    type: types.REMOVE_FROM_PLAYLIST,
    videoId
  };
}

export function playVideoPlayer() {
  return {type: types.PLAY_VIDEO_PLAYER};
}

export function pauseVideoPlayer() {
  return {type: types.PAUSE_VIDEO_PLAYER};
}

export function nextVideoFromPlaylist() {
  return {type: types.NEXT_VIDEO_FROM_PLAYLIST};
}

export function updateCurrentVideo(newVideo) {
  return {type: types.UPDATE_CURRENT_VIDEO, newVideo};
}
