import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { playVideoPlayer, pauseVideoPlayer, nextVideoFromPlaylist } from '../actions';


export class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.onReady = this.onReady.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.onPlay = this.onPlay.bind(this);
    this.onPause = this.onPause.bind(this);
    this.state = {player: null};
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.player) {
      if (nextProps.videoPlayer.isPlaying) {
        nextState.player.playVideo();
      } else {
        nextState.player.pauseVideo();
      }
    }
  }

  onReady(e) {
    this.setState({player: e.target});
  }

  onEnd() {
    this.props.nextVideoFromPlaylist();
  }

  onPause() {
    this.props.pauseVideoPlayer();
  }

  onPlay() {
    this.props.playVideoPlayer();
  }

  render() {
    const opts = {playerVars: {autoplay: 1}};

    return (
      <div className="video-player">
        <YouTube
          className="video-player__iframe"
          videoId={this.props.playlist.currentVideo && this.props.playlist.currentVideo.id.videoId}
          opts={opts}
          onReady={this.onReady}
          onEnd={this.onEnd}
          onPlay={this.onPlay}
          onPause={this.onPause}
        />
      </div>
    );
  }
}

function mapStateToProps({ videoPlayer, playlist }) {
  return {videoPlayer, playlist};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    playVideoPlayer,
    pauseVideoPlayer,
    nextVideoFromPlaylist
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
