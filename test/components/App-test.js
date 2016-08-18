import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../../src/components/App';
import SearchBar from '../../src/components/SearchBar';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('renders', () => {
    expect(wrapper).to.exist;
  });

  it('contains SearchBar', () => {
    expect(wrapper).to.contain(<SearchBar />);
  });
});
