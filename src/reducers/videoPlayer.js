import types from '../constants/ActionTypes';

const initialState = {isPlaying: false};

export default function searchResults(state = initialState, action) {
  switch (action.type) {
    case types.PLAY_VIDEO_PLAYER:
      return Object.assign({}, state, {isPlaying: true});
    case types.PAUSE_VIDEO_PLAYER:
      return Object.assign({}, state, {isPlaying: false});
    default:
      return state;
  }
}
