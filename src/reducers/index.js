import { combineReducers } from 'redux';

import searchResultsReducer from './searchResults';
import playlistReducer from './playlist';
import videoPlayerReducer from './videoPlayer';

const rootReducer = combineReducers({
  searchResults: searchResultsReducer,
  playlist: playlistReducer,
  videoPlayer: videoPlayerReducer,
});

export default rootReducer;
