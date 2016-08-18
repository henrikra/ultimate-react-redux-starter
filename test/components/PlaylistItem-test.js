import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { PlaylistItem } from '../../src/components/PlaylistItem';
import Icon from '../../src/components/Icon';

describe('PlaylistItem', () => {
  const minimumProps = {
    playlistItem: {
      id: {videoId: 'firstVideoId'},
      snippet: {title: 'Video title 1'}
    },
    videoPlayer: {},
    playlist: {currentVideo: {id: {}}}
  };

  it('contains video title', () => {
    const wrapper = shallow(<PlaylistItem {...minimumProps} />);
    expect(wrapper).to.contain.text(minimumProps.playlistItem.snippet.title);
  });

  it('shows play button when PlaylistItem is not currently playing', () => {
    const props = Object.assign({}, minimumProps, {
      videoPlayer: {isPlaying: false},
      playlist: {currentVideo: {id: {videoId: 'myId'}}}
    });
    const wrapper = shallow(<PlaylistItem {...props} />);

    expect(wrapper).to.contain(<Icon icon="play" />);
  });

  it('shows pause button when PlaylistItem is currently playing', () => {
    const props = Object.assign({}, minimumProps, {
      videoPlayer: {isPlaying: true},
      playlist: {currentVideo: {id: {videoId: 'firstVideoId'}}}
    });
    const wrapper = shallow(<PlaylistItem {...props} />);

    expect(wrapper).to.contain(<Icon icon="pause" />);
  });

  it('has active class when PlaylistItem is current video', () => {
    const props = Object.assign({}, minimumProps, {
      playlist: {currentVideo: {id: {videoId: 'firstVideoId'}}}
    });
    const wrapper = shallow(<PlaylistItem {...props} />);

    expect(wrapper).to.have.className('playlist-item--active');
  });
});
