import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export class CurrentlyPlaying extends Component {
  render() {
    const { playlist: { currentVideo } } = this.props;

    if (!currentVideo) {
      return null;
    }

    return (
      <div className="currently-playing">
        <img className="currently-playing__cover" src={currentVideo.snippet.thumbnails.medium.url} />
        <div className="currently-playing__content">
          <div className="currently-playing__title">
            {currentVideo.snippet.title}
          </div>
          <div className="currently-playing__channel-title">
            {currentVideo.snippet.channelTitle}
          </div>
        </div>
      </div>
    );
  }
}

CurrentlyPlaying.propTypes = {
  playlist: PropTypes.object
};

function mapStateToProps({ playlist }) {
  return {playlist};
}

export default connect(mapStateToProps)(CurrentlyPlaying);
