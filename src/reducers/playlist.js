import _ from 'lodash';

import types from '../constants/ActionTypes';

const handleRemove = (state, action) => {
  return _.assign({}, state, {
    videos: _.reject(state.videos, {id: {videoId: action.videoId}})
  });
};

const handleAdd = (state, action) => {
  if (_.find(state.videos, action.video)) {
    return state;
  } else {
    return _.assign({}, state, {videos: [...state.videos, action.video]});;
  }
};

const handlePlayNext = state => {
  const currentVideoIndex = _.findIndex(state.videos, state.currentVideo);

  let nextVideo;
  if (currentVideoIndex === state.videos.length - 1) {
    nextVideo = _.head(state.videos);
  } else {
    nextVideo = _.nth(state.videos, currentVideoIndex + 1);
  }

  return _.assign({}, state, {currentVideo: nextVideo});
};

const handleUpdateCurrentVideoId = (state, action) => {
  return _.assign({}, state, {currentVideo: action.newVideo});
};

const initialState = {
  currentVideo: null,
  videos: []
};

export default function playlist(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TO_PLAYLIST:
      return handleAdd(state, action);
    case types.REMOVE_FROM_PLAYLIST:
      return handleRemove(state, action);
    case types.NEXT_VIDEO_FROM_PLAYLIST:
      return handlePlayNext(state);
    case types.UPDATE_CURRENT_VIDEO:
      return handleUpdateCurrentVideoId(state, action);
    default:
      return state;
  }
}
