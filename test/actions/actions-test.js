import configureMockStore from 'redux-mock-store';
import { expect } from 'chai';
import thunk from 'redux-thunk';

import * as actions from '../../src/actions';
import types from '../../src/constants/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
  it('creates FETCH_SEARCH_RESULTS when fetching videos has been done', () => {
    const store = mockStore();

    return store.dispatch(actions.fetchSearchResults())
      .then(() => {
        const action = store.getActions()[0];
        expect(action.type).to.equal(types.FETCH_SEARCH_RESULTS);
        expect(action.searchResults).to.have.length(20);
      });
  });

  it('creates ADD_TO_PLAYLIST action', () => {
    const video = 1;
    const expectedAction = {
      type: types.ADD_TO_PLAYLIST,
      video: 1
    };

    expect(actions.addToPlaylist(video)).to.eql(expectedAction);
  });

  it('creates REMOVE_FROM_PLAYLIST action', () => {
    const videoId = 'superVideoId123';
    const expectedAction = {
      type: types.REMOVE_FROM_PLAYLIST,
      videoId
    };

    expect(actions.removeFromPlaylist(videoId)).to.eql(expectedAction);
  });

  it('creates PAUSE_VIDEO_PLAYER action', () => {
    const expectedAction = {type: types.PAUSE_VIDEO_PLAYER};

    expect(actions.pauseVideoPlayer()).to.eql(expectedAction);
  });

  it('creates NEXT_VIDEO_FROM_PLAYLIST action', () => {
    const expectedAction = {type: types.NEXT_VIDEO_FROM_PLAYLIST};

    expect(actions.nextVideoFromPlaylist()).to.eql(expectedAction);
  });

  it('creates UPDATE_CURRENT_VIDEO action', () => {
    const newVideo = {id: {videoId: 'thisIsVideoId'}};
    const expectedAction = {type: types.UPDATE_CURRENT_VIDEO, newVideo};

    expect(actions.updateCurrentVideo(newVideo)).to.eql(expectedAction);
  });

  it('creates PLAY_VIDEO_PLAYER action', () => {
    const expectedAction = {type: types.PLAY_VIDEO_PLAYER};

    expect(actions.playVideoPlayer()).to.eql(expectedAction);
  });
});
