import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';

import Icon from './Icon';

import {
  removeFromPlaylist,
  updateCurrentVideo,
  playVideoPlayer,
  pauseVideoPlayer
} from '../actions';

export class PlaylistItem extends Component {
  constructor(props) {
    super(props);

    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handlePauseClick = this.handlePauseClick.bind(this);
    this.isCurrentlyPlaying = this.isCurrentlyPlaying.bind(this);
  }

  handleRemoveClick() {
    this.props.removeFromPlaylist(this.props.playlistItem.id.videoId);
  }

  handlePlayClick() {
    this.props.updateCurrentVideo(this.props.playlistItem);
    this.props.playVideoPlayer();
  }

  handlePauseClick() {
    this.props.pauseVideoPlayer();
  }

  isCurrentlyPlaying() {
    const { videoPlayer } = this.props;
    return videoPlayer.isPlaying && this.isCurrentVideo();
  }

  isCurrentVideo() {
    const { playlistItem, playlist } = this.props;
    if (!playlist.currentVideo) {
      return false;
    }
    return playlist.currentVideo.id.videoId === playlistItem.id.videoId;
  }

  render() {
    const { playlistItem } = this.props;
    const classes = classNames('playlist-item', {
      'playlist-item--active': this.isCurrentVideo()
    });

    return (
      <li className={classes}>
        <div className="playlist-item__play-control">
          <button className="playlist-item__button" onClick={this.isCurrentlyPlaying() ? this.handlePauseClick : this.handlePlayClick}>
            {this.isCurrentlyPlaying() ? <Icon icon="pause" /> : <Icon icon="play" />}
          </button>
        </div>
        <div className="playlist-item__info">
          <div className="playlist-item__title">
            {playlistItem.snippet.title}
          </div>
          <div className="playlist-item__channel-title">
            {playlistItem.snippet.channelTitle}
          </div>
        </div>
        <div className="playlist-item__actions">
          <button className="playlist-item__action-button" onClick={this.handleRemoveClick}>
            <Icon icon="minus" />
          </button>
        </div>
      </li>
    );
  }
}

PlaylistItem.propTypes = {
  videoPlayer: PropTypes.object,
  playlist: PropTypes.object,
  removeFromPlaylist: PropTypes.func,
  updateCurrentVideo: PropTypes.func,
  playVideoPlayer: PropTypes.func,
  pauseVideoPlayer: PropTypes.func,
};

function mapStateToProps({ videoPlayer, playlist }) {
  return {videoPlayer, playlist};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    removeFromPlaylist,
    updateCurrentVideo,
    playVideoPlayer,
    pauseVideoPlayer
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistItem);
