import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { Playlist } from '../../src/components/Playlist';
import PlaylistItem from '../../src/components/PlaylistItem';

describe('Playlist', () => {
  const minimumProps = {
    playlist: {
      videos: []
    }
  };

  it('renders three PlaylistItem items', () => {
    const props = {
      playlist: {
        videos: [
          {title: 'Title 1'},
          {title: 'Title 2'},
          {title: 'Title 3'}
        ]
      }
    };

    const wrapper = shallow(<Playlist {...props} />);
    expect(wrapper.find(PlaylistItem)).to.have.length(3);
  });

  it('does not render PlaylistItems with empty playlist', () => {
    const wrapper = shallow(<Playlist {...minimumProps} />);
    expect(wrapper.find(PlaylistItem)).to.have.length(0);
  });
});
