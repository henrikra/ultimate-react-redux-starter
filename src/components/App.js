import React, { Component } from 'react';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import VideoPlayer from './VideoPlayer';
import CurrentlyPlaying from './CurrentlyPlaying';

require('font-awesome/css/font-awesome.min.css');
require('../../style/style.css');

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="main-content">
          <h1>Playlistify</h1>
          <VideoPlayer />
          <SearchBar />
          <SearchResults />
        </div>
        <div className="sidebar">
          <CurrentlyPlaying />
          <Playlist />
        </div>
      </div>
    );
  }
}
